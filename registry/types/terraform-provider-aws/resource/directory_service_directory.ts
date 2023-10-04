export interface DirectoryServiceDirectory {
    resource: Resource[];
}

export interface Resource {
    directory_service_directory: DirectoryServiceDirectoryClass;
}

export interface DirectoryServiceDirectoryClass {
    /** (Required) The fully qualified name for the directory, such as `corp.example.com` */
    name:                                  any;
    /** (Required) The password for the directory administrator or connector user. */
    password:                              any;
    /** (Optional) (For `SimpleAD` and `ADConnector` types) The size of the directory (`Small` or `Large` are accepted values). `Large` by default. */
    size?:                                 any;
    /** (Required for `SimpleAD` and `MicrosoftAD`) VPC related information about the directory. Fields documented below. */
    vpc_settings?:                         any;
    /** (Required for `ADConnector`) Connector related information about the directory. Fields documented below. */
    connect_settings?:                     any;
    /** (Optional) The alias for the directory (must be unique amongst all aliases in AWS). Required for `enable_sso`. */
    alias?:                                any;
    /** (Optional) A textual description for the directory. */
    description?:                          any;
    /** (Optional) The number of domain controllers desired in the directory. Minimum value of `2`. Scaling of domain controllers is only supported for `MicrosoftAD` directories. */
    desired_number_of_domain_controllers?: any;
    /** (Optional) The short name of the directory, such as `CORP`. */
    short_name?:                           any;
    /** (Optional) Whether to enable single-sign on for the directory. Requires `alias`. Defaults to `false`. */
    enable_sso?:                           any;
    /** (Optional, for type `MicrosoftAD` only) The MicrosoftAD edition (`Standard` or `Enterprise`). Defaults to `Enterprise`. */
    edition?:                              any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                 any;
    /** (Required) The identifiers of the subnets for the directory servers (2 subnets in 2 different AZs). */
    subnet_ids:                            any;
    /** (Required) The identifier of the VPC that the directory is in. */
    vpc_id:                                any;
    /** (Required) The username corresponding to the password provided. */
    customer_username:                     any;
    /** (Required) The DNS IP addresses of the domain to connect to. */
    customer_dns_ips:                      any;
}