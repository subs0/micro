export interface EcrRepository {
    data: Datum[];
}

export interface Datum {
    ecr_repository: EcrRepositoryClass;
}

export interface EcrRepositoryClass {
    /** (Required) Name of the ECR Repository. */
    name:         any;
    /** (Optional) Registry ID where the repository was created. */
    registry_id?: any;
}