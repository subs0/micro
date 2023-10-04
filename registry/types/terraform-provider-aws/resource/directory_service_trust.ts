export interface DirectoryServiceTrust {
    resource: Resource[];
}

export interface Resource {
    directory_service_trust: DirectoryServiceTrustClass;
}

export interface DirectoryServiceTrustClass {
    /** (Optional) Set of IPv4 addresses for the DNS server associated with the remote Directory. */
    conditional_forwarder_ip_addrs?:          any;
    /** (Optional) Whether to delete the conditional forwarder when deleting the Trust relationship. */
    delete_associated_conditional_forwarder?: any;
    /** (Required) ID of the Directory. */
    directory_id:                             any;
    /** (Required) Fully qualified domain name of the remote Directory. */
    remote_domain_name:                       any;
    /** (Optional) Whether to enable selective authentication. */
    selective_auth?:                          any;
    /** (Required) The direction of the Trust relationship. */
    trust_direction:                          any;
    /** (Required) Password for the Trust. */
    trust_password:                           any;
    /** (Optional) Type of the Trust relationship. */
    trust_type?:                              any;
}