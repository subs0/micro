export interface Instance {
    data: Datum[];
}

export interface Datum {
    instance: InstanceClass;
}

export interface InstanceClass {
    /** (Optional) Specify the exact Instance ID with which to populate the data source. */
    instance_id?:       any;
    /** (Optional) Map of tags, each pair of which must */
    instance_tags?:     any;
    /** (Optional) One or more name/value pairs to use as filters. There are */
    filter?:            any;
    /** (Optional) If true, wait for password data to become available and retrieve it. Useful for getting the administrator password for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. See [GetPasswordData](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_GetPasswordData.html) for more information. */
    get_password_data?: any;
    /** (Optional) Retrieve Base64 encoded User Data contents into the `user_data_base64` attribute. A SHA-1 hash of the User Data contents will always be present in the `user_data` attribute. Defaults to `false`. */
    get_user_data?:     any;
}