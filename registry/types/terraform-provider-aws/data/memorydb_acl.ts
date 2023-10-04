export interface MemorydbACL {
    data: Datum[];
}

export interface Datum {
    memorydb_acl: MemorydbACLClass;
}

export interface MemorydbACLClass {
    /** (Required) Name of the ACL. */
    name: any;
}