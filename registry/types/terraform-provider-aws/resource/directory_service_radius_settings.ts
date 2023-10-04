export interface DirectoryServiceRadiusSettings {
    resource: Resource[];
}

export interface Resource {
    directory_service_radius_settings: DirectoryServiceRadiusSettingsClass;
}

export interface DirectoryServiceRadiusSettingsClass {
    /** (Optional) The protocol specified for your RADIUS endpoints. Valid values: `PAP`, `CHAP`, `MS-CHAPv1`, `MS-CHAPv2`. */
    authentication_protocol?: any;
    /** (Required) The identifier of the directory for which you want to manager RADIUS settings. */
    directory_id:             any;
    /** (Required) Display label. */
    display_label:            any;
    /** (Required) The port that your RADIUS server is using for communications. Your self-managed network must allow inbound traffic over this port from the AWS Directory Service servers. */
    radius_port:              any;
    /** (Required) The maximum number of times that communication with the RADIUS server is attempted. Minimum value of `0`. Maximum value of `10`. */
    radius_retries:           any;
    /** (Required) An array of strings that contains the fully qualified domain name (FQDN) or IP addresses of the RADIUS server endpoints, or the FQDN or IP addresses of your RADIUS server load balancer. */
    radius_servers:           any;
    /** (Required) The amount of time, in seconds, to wait for the RADIUS server to respond. Minimum value of `1`. Maximum value of `50`. */
    radius_timeout:           any;
    /** (Required) Required for enabling RADIUS on the directory. */
    shared_secret:            any;
    /** (Optional) Not currently used. */
    use_same_username?:       any;
}