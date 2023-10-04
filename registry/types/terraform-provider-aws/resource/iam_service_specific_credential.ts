export interface IamServiceSpecificCredential {
    resource: Resource[];
}

export interface Resource {
    iam_service_specific_credential: IamServiceSpecificCredentialClass;
}

export interface IamServiceSpecificCredentialClass {
    /** (Required) The name of the AWS service that is to be associated with the credentials. The service you specify here is the only service that can be accessed using these credentials. */
    service_name: any;
    /** (Required) The name of the IAM user that is to be associated with the credentials. The new service-specific credentials have the same permissions as the associated user except that they can be used only to access the specified service. */
    user_name:    any;
    /** (Optional) The status to be assigned to the service-specific credential. Valid values are `Active` and `Inactive`. Default value is `Active`. */
    status?:      any;
}