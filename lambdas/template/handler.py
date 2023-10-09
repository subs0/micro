import os

def handler (event, context):
    print("Hello world")
    print("Here are the environment variables:")
    # for each environment variable, print
    for key, value in os.environ.items():
        print(key, value)
    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }