export interface FsxOntapStorageVirtualMachine {
    resource: Resource[];
}

export interface Resource {
    fsx_ontap_storage_virtual_machine: FsxOntapStorageVirtualMachineClass;
}

export interface FsxOntapStorageVirtualMachineClass {
    active_directory_configuration?: ActiveDirectoryConfiguration;
    /** (Required) The ID of the Amazon FSx ONTAP File System that this SVM will be created on. */
    file_system_id:                  any;
    /** (Required) The name of the SVM. You can use a maximum of 47 alphanumeric characters, plus the underscore (_) special character. */
    name:                            any;
    /** (Optional) Specifies the root volume security style, Valid values are `UNIX`, `NTFS`, and `MIXED`. All volumes created under this SVM will inherit the root security style unless the security style is specified on the volume. Default value is `UNIX`. */
    root_volume_security_style?:     any;
    /** (Optional) A map of tags to assign to the storage virtual machine. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Optional) Configuration block that Amazon FSx uses to join the SVM to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. */
    self_managed_active_directory?:  SelfManagedActiveDirectory;
}

export interface ActiveDirectoryConfiguration {
    /** (Required) The NetBIOS name of the Active Directory computer object that will be created for your SVM. This is often the same as the SVM name but can be different. AWS limits to 15 characters because of standard NetBIOS naming limits. */
    netbios_name:                  any;
    /** (Optional) Configuration block that Amazon FSx uses to join the SVM to your self-managed (including on-premises) Microsoft Active Directory (AD) directory. */
    self_managed_active_directory: any;
}

export interface SelfManagedActiveDirectory {
    /** (Required) A list of up to three IP addresses of DNS servers or domain controllers in the self-managed AD directory. */
    dns_ips:                                any;
    /** (Required) The fully qualified domain name of the self-managed AD directory. For example, `corp.example.com`. */
    domain_name:                            any;
    /** (Required) The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. */
    password:                               any;
    /** (Required) The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. */
    username:                               any;
    /** (Optional) The name of the domain group whose members are granted administrative privileges for the SVM. The group that you specify must already exist in your domain. Defaults to `Domain Admins`. */
    file_system_administrators_group:       any;
    /** (Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory that the Windows File Server instance will join. For example, `OU=FSx,DC=yourdomain,DC=corp,DC=com`. Only accepts OU as the direct parent of the SVM. If none is provided, the SVM is created in the default location of your self-managed AD directory. To learn more, see [RFC 2253](https://tools.ietf.org/html/rfc2253). */
    organizational_unit_distinguished_name: any;
}