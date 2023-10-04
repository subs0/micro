export interface SnsTopicSubscription {
    resource: Resource[];
}

export interface Resource {
    sns_topic_subscription: SnsTopicSubscriptionClass;
}

export interface SnsTopicSubscriptionClass {
    /** (Required) Endpoint to send data to. The contents vary with the protocol. See details below. */
    endpoint:                         any;
    /** (Required) Protocol to use. Valid values are: `sqs`, `sms`, `lambda`, `firehose`, and `application`. Protocols `email`, `email-json`, `http` and `https` are also valid but partially supported. See details below. */
    protocol:                         any;
    /** (Required if `protocol` is `firehose`) ARN of the IAM role to publish to Kinesis Data Firehose delivery stream. Refer to [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html). */
    subscription_role_arn?:           any;
    /** (Required) ARN of the SNS topic to subscribe to. */
    topic_arn:                        any;
    /** (Optional) Integer indicating number of minutes to wait in retrying mode for fetching subscription arn before marking it as failure. Only applicable for http and https protocols. Default is `1`. */
    confirmation_timeout_in_minutes?: any;
    /** (Optional) JSON String with the delivery policy (retries, backoff, etc.) that will be used in the subscription - this only applies to HTTP/S subscriptions. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/DeliveryPolicies.html) for more details. */
    delivery_policy?:                 any;
    /** (Optional) Whether the endpoint is capable of [auto confirming subscription](http://docs.aws.amazon.com/sns/latest/dg/SendMessageToHttp.html#SendMessageToHttp.prepare) (e.g., PagerDuty). Default is `false`. */
    endpoint_auto_confirms?:          any;
    /** (Optional) JSON String with the filter policy that will be used in the subscription to filter messages seen by the target resource. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/message-filtering.html) for more details. */
    filter_policy?:                   any;
    /** (Optional) Whether the `filter_policy` applies to `MessageAttributes` (default) or `MessageBody`. */
    filter_policy_scope?:             any;
    /** (Optional) Whether to enable raw message delivery (the original message is directly passed, not wrapped in JSON with the original message in the message property). Default is `false`. */
    raw_message_delivery?:            any;
    /** (Optional) JSON String with the redrive policy that will be used in the subscription. Refer to the [SNS docs](https://docs.aws.amazon.com/sns/latest/dg/sns-dead-letter-queues.html#how-messages-moved-into-dead-letter-queue) for more details. */
    redrive_policy?:                  any;
    /** Delivers JSON-encoded messages. `endpoint` is the endpoint ARN of a mobile app and device. */
    application?:                     any;
    /** Delivers JSON-encoded messages. `endpoint` is the ARN of an Amazon Kinesis Data Firehose delivery stream (e.g., */
    firehose?:                        any;
    /** Delivers JSON-encoded messages. `endpoint` is the ARN of an AWS Lambda function. */
    lambda?:                          any;
    /** Delivers text messages via SMS. `endpoint` is the phone number of an SMS-enabled device. */
    sms?:                             any;
    /** Delivers JSON-encoded messages. `endpoint` is the ARN of an Amazon SQS queue (e.g., `arn:aws:sqs:us-west-2:123456789012:terraform-queue-too`). */
    sqs?:                             any;
    /** Delivers messages via SMTP. `endpoint` is an email address. */
    email?:                           any;
    "email-json"?:                    any;
}