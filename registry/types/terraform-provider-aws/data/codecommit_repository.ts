export interface CodecommitRepository {
    data: Datum[];
}

export interface Datum {
    codecommit_repository: CodecommitRepositoryClass;
}

export interface CodecommitRepositoryClass {
    /** (Required) Name for the repository. This needs to be less than 100 characters. */
    repository_name: any;
}