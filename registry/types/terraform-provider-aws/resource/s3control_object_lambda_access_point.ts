export interface S3ControlObjectLambdaAccessPoint {
    resource: Resource[];
}

export interface Resource {
    s3control_object_lambda_access_point: S3ControlObjectLambdaAccessPointClass;
}

export interface S3ControlObjectLambdaAccessPointClass {
    /** (Optional) The AWS account ID for the owner of the bucket for which you want to create an Object Lambda Access Point. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?:                  any;
    /** (Required) A configuration block containing details about the Object Lambda Access Point. See [Configuration](#configuration) below for more details. */
    configuration:                any;
    /** (Required) The name for this Object Lambda Access Point. */
    name:                         any;
    /** (Optional) Allowed features. Valid values: `GetObject-Range`, `GetObject-PartNumber`. */
    allowed_features?:            any;
    /** (Optional) Whether or not the CloudWatch metrics configuration is enabled. */
    cloud_watch_metrics_enabled?: any;
    /** (Required) Standard access point associated with the Object Lambda Access Point. */
    supporting_access_point:      any;
    /** (Required) List of transformation configurations for the Object Lambda Access Point. See [Transformation Configuration](#transformation-configuration) below for more details. */
    transformation_configuration: any;
    /** (Required) The actions of an Object Lambda Access Point configuration. Valid values: `GetObject`. */
    actions:                      any;
    /** (Required) The content transformation of an Object Lambda Access Point configuration. See [Content Transformation](#content-transformation) below for more details. */
    content_transformation:       any;
    /** (Required) Configuration for an AWS Lambda function. See [AWS Lambda](#aws-lambda) below for more details. */
    aws_lambda:                   any;
    /** (Required) The Amazon Resource Name (ARN) of the AWS Lambda function. */
    function_arn:                 any;
    /** (Optional) Additional JSON that provides supplemental data to the Lambda function used to transform objects. */
    function_payload?:            any;
}