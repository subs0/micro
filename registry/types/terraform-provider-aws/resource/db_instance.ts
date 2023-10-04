export interface DBInstance {
    resource: Resource[];
}

export interface Resource {
    db_instance: { [key: any]: string };
}