export interface DevicefarmUpload {
    resource: Resource[];
}

export interface Resource {
    devicefarm_upload: DevicefarmUploadClass;
}

export interface DevicefarmUploadClass {
    /** (Optional) The upload's content type (for example, application/octet-stream). */
    content_type?: any;
    /** (Required) The upload's file name. The name should not contain any forward slashes (/). If you are uploading an iOS app, the file name must end with the .ipa extension. If you are uploading an Android app, the file name must end with the .apk extension. For all others, the file name must end with the .zip file extension. */
    name:          any;
    /** (Required) The ARN of the project for the upload. */
    project_arn:   any;
    /** (Required) The upload's upload type. See [AWS Docs](https://docs.aws.amazon.com/devicefarm/latest/APIReference/API_CreateUpload.html#API_CreateUpload_RequestSyntax) for valid list of values. */
    type:          any;
}