export interface IotTopicRule {
    resource: Resource[];
}

export interface Resource {
    iot_topic_rule: { [key: any]: string };
}