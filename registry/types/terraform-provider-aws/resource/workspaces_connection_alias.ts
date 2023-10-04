export interface WorkspacesConnectionAlias {
    resource: Resource[];
}

export interface Resource {
    workspaces_connection_alias: WorkspacesConnectionAliasClass;
}

export interface WorkspacesConnectionAliasClass {
    connection_any: string;
}