import os

def handler(event, context):
    print("Hello from http_tester lambda!")
    print("event:\n", event)
    print("context:\n", context)
    # get environment variables
    print("environment variables:")
    for key, value in os.environ.items():
        print(f"\t{key}: {value}")
    return event