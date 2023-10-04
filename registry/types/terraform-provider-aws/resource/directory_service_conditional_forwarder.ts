export interface DirectoryServiceConditionalForwarder {
    resource: Resource[];
}

export interface Resource {
    directory_service_conditional_forwarder: DirectoryServiceConditionalForwarderClass;
}

export interface DirectoryServiceConditionalForwarderClass {
    /** (Required) ID of directory. */
    directory_id:       any;
    /** (Required) A list of forwarder IP addresses. */
    dns_ips:            any;
    /** (Required) The fully qualified domain name of the remote domain for which forwarders will be used. */
    remote_domain_name: any;
}