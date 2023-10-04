export interface MedialiveInput {
    resource: Resource[];
}

export interface Resource {
    medialive_input: MedialiveInputClass;
}

export interface MedialiveInputClass {
    /** (Required) Name of the input. */
    name:                  any;
    /** (Required) List of input security groups. */
    input_security_groups: any;
    /** (Required) The different types of inputs that AWS Elemental MediaLive supports. */
    type:                  any;
    /** (Optional) Destination settings for PUSH type inputs. See [Destinations](#destinations) for more details. */
    destinations?:         any;
    /** (Optional) Settings for the devices. See [Input Devices](#input-devices) for more details. */
    input_devices?:        any;
    /** (Optional) A list of the MediaConnect Flows. See [Media Connect Flows](#media-connect-flows) for more details. */
    media_connect_flows?:  any;
    /** (Optional) The ARN of the role this input assumes during and after creation. */
    role_arn?:             any;
    /** (Optional) The source URLs for a PULL-type input. See [Sources](#sources) for more details. */
    sources?:              any;
    /** (Optional) Settings for a private VPC Input. See [VPC](#vpc) for more details. */
    vpc?:                  any;
    /** A unique name for the location the RTMP stream is being pushed to. */
    stream_name?:          any;
    /** The unique ID for the device. */
    id?:                   any;
    /** The ARN of the MediaConnect Flow */
    flow_arn?:             any;
    /** The key used to extract the password from EC2 Parameter store. */
    password_param?:       any;
    /** The URL where the stream is pulled from. */
    url?:                  any;
    /** The username for the input source. */
    username?:             any;
    /** A list of 2 VPC subnet IDs from the same VPC. */
    subnet_ids?:           any;
    /** A list of up to 5 EC2 VPC security group IDs to attach to the Input. */
    security_group_ids?:   any;
}