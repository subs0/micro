export interface DatasyncLocationHdfs {
    resource: Resource[];
}

export interface Resource {
    datasync_location_hdfs: DatasyncLocationHdfsClass;
}

export interface DatasyncLocationHdfsClass {
    /** (Required) A list of DataSync Agent ARNs with which this location will be associated. */
    agent_arns:                any;
    /** (Required) The type of authentication used to determine the identity of the user. Valid values are `SIMPLE` and `KERBEROS`. */
    authentication_type:       any;
    /** (Required)  The NameNode that manages the HDFS namespace. The NameNode performs operations such as opening, closing, and renaming files and directories. The NameNode contains the information to map blocks of data to the DataNodes. You can use only one NameNode. See configuration below. */
    name_node:                 any;
    /** (Optional) The user name used to identify the client on the host operating system. If `SIMPLE` is specified for `authentication_type`, this parameter is required. */
    simple_user?:              any;
    /** (Optional) The size of data blocks to write into the HDFS cluster. The block size must be a multiple of 512 bytes. The default block size is 128 mebibytes (MiB). */
    block_size?:               any;
    /** (Optional) The number of DataNodes to replicate the data to when writing to the HDFS cluster. By default, data is replicated to three DataNodes. */
    replication_factor?:       any;
    /** (Optional) The Kerberos key table (keytab) that contains mappings between the defined Kerberos principal and the encrypted keys. If `KERBEROS` is specified for `authentication_type`, this parameter is required. */
    kerberos_keytab?:          any;
    /** (Optional) The krb5.conf file that contains the Kerberos configuration information. If `KERBEROS` is specified for `authentication_type`, this parameter is required. */
    kerberos_krb5_conf?:       any;
    /** (Optional) The Kerberos principal with access to the files and folders on the HDFS cluster. If `KERBEROS` is specified for `authentication_type`, this parameter is required. */
    kerberos_principal?:       any;
    /** (Optional) The URI of the HDFS cluster's Key Management Server (KMS). */
    kms_key_provider_uri?:     any;
    /** (Optional) The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer protection settings configured on the Hadoop Distributed File System (HDFS) cluster. If `qop_configuration` isn't specified, `rpc_protection` and `data_transfer_protection` default to `PRIVACY`. If you set RpcProtection or DataTransferProtection, the other parameter assumes the same value.  See configuration below. */
    qop_configuration?:        any;
    /** (Optional) A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /. */
    subdirectory?:             any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Required) The hostname of the NameNode in the HDFS cluster. This value is the IP address or Domain Name Service (DNS) name of the NameNode. An agent that's installed on-premises uses this hostname to communicate with the NameNode in the network. */
    hostname:                  any;
    /** (Required) The port that the NameNode uses to listen to client requests. */
    port:                      any;
    /** (Optional) The data transfer protection setting configured on the HDFS cluster. This setting corresponds to your dfs.data.transfer.protection setting in the hdfs-site.xml file on your Hadoop cluster. Valid values are `DISABLED`, `AUTHENTICATION`, `INTEGRITY` and `PRIVACY`. */
    data_transfer_protection?: any;
    /** (Optional)The RPC protection setting configured on the HDFS cluster. This setting corresponds to your hadoop.rpc.protection setting in your core-site.xml file on your Hadoop cluster. Valid values are `DISABLED`, `AUTHENTICATION`, `INTEGRITY` and `PRIVACY`. */
    rpc_protection?:           any;
}