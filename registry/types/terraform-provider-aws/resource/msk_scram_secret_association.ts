export interface MskScramSecretAssociation {
    resource: Resource[];
}

export interface Resource {
    msk_scram_secret_association: MskScramSecretAssociationClass;
}

export interface MskScramSecretAssociationClass {
    /** (Required, Forces new resource) Amazon Resource Name (ARN) of the MSK cluster. */
    cluster_arn?:    any;
    /** (Required) List of AWS Secrets Manager secret ARNs. */
    secret_arn_list: any;
}