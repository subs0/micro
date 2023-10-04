export interface SsmcontactsContact {
    resource: Resource[];
}

export interface Resource {
    ssmcontacts_contact: SsmcontactsContactClass;
}

export interface SsmcontactsContactClass {
    "~> **NOTE:** A contact implicitly depends on a replication set. If you configured your replication set in Terraform, we recommend you add it to the `depends_on` argument for the Terraform Contact Resource."?: any;
}