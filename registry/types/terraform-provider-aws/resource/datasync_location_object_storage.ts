export interface DatasyncLocationObjectStorage {
    resource: Resource[];
}

export interface Resource {
    datasync_location_object_storage: DatasyncLocationObjectStorageClass;
}

export interface DatasyncLocationObjectStorageClass {
    /** (Required) A list of DataSync Agent ARNs with which this location will be associated. */
    agent_arns:          any;
    /** (Optional) The access key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively. */
    access_key?:         any;
    /** (Required) The bucket on the self-managed object storage server that is used to read data from. */
    bucket_name:         any;
    /** (Optional) The secret key is used if credentials are required to access the self-managed object storage server. If your object storage requires a user name and password to authenticate, use `access_key` and `secret_key` to provide the user name and password, respectively. */
    secret_key?:         any;
    /** (Optional) Specifies a certificate to authenticate with an object storage system that uses a private or self-signed certificate authority (CA). You must specify a Base64-encoded .pem string. The certificate can be up to 32768 bytes (before Base64 encoding). */
    server_certificate?: any;
    /** (Required) The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server. An agent uses this host name to mount the object storage server in a network. */
    server_hostname:     any;
    /** (Optional) The protocol that the object storage server uses to communicate. Valid values are `HTTP` or `HTTPS`. */
    server_protocol?:    any;
    /** (Optional) The port that your self-managed object storage server accepts inbound network traffic on. The server port is set by default to TCP 80 (`HTTP`) or TCP 443 (`HTTPS`). You can specify a custom port if your self-managed object storage server requires one. */
    server_port?:        any;
    /** (Optional) A subdirectory in the HDFS cluster. This subdirectory is used to read data from or write data to the HDFS cluster. If the subdirectory isn't specified, it will default to /. */
    subdirectory?:       any;
    /** (Optional) Key-value pairs of resource tags to assign to the DataSync Location. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}