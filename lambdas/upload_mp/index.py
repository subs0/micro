import boto3
import json
import os
from botocore.client import Config
from botocore.exceptions import ClientError
import mimetypes

env = os.environ.get('ENVIRONMENT')
local = env == 'local'

# injected by @-0/micro
AWS_S3_BUCKET_NAME = os.environ.get('S3_BUCKET_NAME')
SNS_TOPIC_ARN = os.environ.get('SNS_TOPIC_ARN')
SNS_MESSAGE_ATTRS = os.environ.get('SNS_MESSAGE_ATTRS')

# provided by default environment vars in lambda
AWS_S3_REGION = os.environ.get('AWS_REGION')

if local:
    # provided by default environment vars in lambda
    # defaults https://gist.github.com/seeebiii/6d73b838dc4de74fd6323010e8a650b6
    # docs: https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html
    AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
    AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
    s3 = boto3.client(
        's3',
        aws_access_key_id=AWS_ACCESS_KEY_ID,
        aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
        region_name=AWS_S3_REGION
    )
else:
    s3 = boto3.client(
        's3',
        region_name=AWS_S3_REGION
    )

# docs: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3/client/create_multipart_upload.html#


def up_mp_init(event, context):
    body = json.loads(event['body'])
    name = body['name']
    s3_path = body['s3Key']
    mime = mimetypes.guess_type(name)[0]

    multipart_params = {
        'Bucket': AWS_S3_BUCKET_NAME,
        'Key': f"{s3_path}/{name}",
        'ContentType': mime,
        # 'ACL': 'public-read',
    }
    multipart_upload = s3.create_multipart_upload(**multipart_params)
    return {
        'statusCode': 200,
        # cors
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': True,
        },
        'body': json.dumps({
            'fileId': multipart_upload['UploadId'],
            'fileKey': multipart_upload['Key'],
        }),
    }


def up_mp_get_urls(event, context):
    """
    parts_signature = [
        {
            'ETag': 'string',
            'PartNumber': 123
        },
        ...
    ]
    """
    body = json.loads(event['body'])
    file_key = body['fileKey']
    file_id = body['fileId']
    parts = body['parts']

    multipart_params = {
        'Bucket': AWS_S3_BUCKET_NAME,
        'Key': file_key,
        'UploadId': file_id,
    }
    signed_urls = []

    for index in range(parts):
        signed_urls.append(
            s3.generate_presigned_url(
                'upload_part',
                Params={
                    **multipart_params,
                    'PartNumber': index + 1,
                },
            )
        )
    part_signed_url_list = []
    for index, signed_url in enumerate(signed_urls):
        part_signed_url_list.append({
            'signedUrl': signed_url,
            'PartNumber': index + 1,
        })
    return {
        'statusCode': 200,
        # cors
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': True,
        },
        'body': json.dumps({
            'parts': part_signed_url_list,
        }),
    }


def up_mp_finalize(event, context):

    body = json.loads(event['body'])
    file_id = body['fileId']
    file_key = body['fileKey']
    parts = body['parts']

    multipart_params = {
        'Bucket': AWS_S3_BUCKET_NAME,
        'Key': file_key,
        'UploadId': file_id,
        'MultipartUpload': {
            'Parts': sorted(parts, key=lambda part: part['PartNumber']),
        },
    }
    s3.complete_multipart_upload(**multipart_params)

    msg_attrs = json.loads(SNS_MESSAGE_ATTRS)

    message = {
        "status": "success",
        "fileId": file_id,
        "fileKey": file_key,
        "bucket": AWS_S3_BUCKET_NAME,
    }

    # publish to SNS 📦
    sns = boto3.client('sns')
    try:
        sns.publish(
            TopicArn=SNS_TOPIC_ARN,
            Message=message,
            MessageAttributes=msg_attrs,
        )
    except ClientError as e:
        message = 'failed to publish to SNS: ' + str(e)

    print(message)
    return {
        'statusCode': 200,
        # cors
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': True,
        },
        'body': json.dumps({
            "message": message
        }),
    }


def up_mp_abort(event, context):
    body = json.loads(event['body'])
    file_id = body['fileId']
    file_key = body['fileKey']

    multipart_params = {
        'Bucket': AWS_S3_BUCKET_NAME,
        'Key': file_key,
        'UploadId': file_id,
    }
    s3.abort_multipart_upload(**multipart_params)
    result = json.dumps({
        'status': 'aborted'
    })
    return {
        'statusCode': 200,
        # cors
        'headers': {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': True,
        },
        'body': result,
    }


def handler(event, context):
    print("event:\n", event)
    path = event['path']
    noop = {
        'statusCode': 404,
        'body': json.dumps(f"Endpoint {path} Not Found"),
    }
    method = event['httpMethod']
    if method == 'POST':
        match path:
            case '/upload/mp-init': return up_mp_init(event, context)
            case '/upload/mp-get-urls': return up_mp_get_urls(event, context)
            case '/upload/mp-finalize': return up_mp_finalize(event, context)
            case '/upload/mp-abort': return up_mp_abort(event, context)
            case _: return noop
    return noop
