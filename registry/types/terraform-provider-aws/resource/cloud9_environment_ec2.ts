export interface Cloud9EnvironmentEc2 {
    resource: Resource[];
}

export interface Resource {
    cloud9_environment_ec2: Cloud9EnvironmentEc2Class;
}

export interface Cloud9EnvironmentEc2Class {
    /** (Required) The name of the environment. */
    name:                         any;
    /** (Required) The type of instance to connect to the environment, e.g., `t2.micro`. */
    instance_type:                any;
    /** (Optional) The number of minutes until the running instance is shut down after the environment has last been used. */
    automatic_stop_time_minutes?: any;
    /** (Optional) The connection type used for connecting to an Amazon EC2 environment. Valid values are `CONNECT_SSH` and `CONNECT_SSM`. For more information please refer [AWS documentation for Cloud9](https://docs.aws.amazon.com/cloud9/latest/user-guide/ec2-ssm.html). */
    connection_type?:             any;
    /** (Optional) The description of the environment. */
    description?:                 any;
    /** (Optional) The identifier for the Amazon Machine Image (AMI) that's used to create the EC2 instance. Valid values are */
    image_id?:                    any;
    /** (Optional) The ARN of the environment owner. This can be ARN of any AWS IAM principal. Defaults to the environment's creator. */
    owner_arn?:                   any;
    /** (Optional) The ID of the subnet in Amazon VPC that AWS Cloud9 will use to communicate with the Amazon EC2 instance. */
    subnet_id?:                   any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
}