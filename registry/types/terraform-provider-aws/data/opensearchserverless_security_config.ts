export interface OpensearchserverlessSecurityConfig {
    data: Datum[];
}

export interface Datum {
    opensearchserverless_security_config: OpensearchserverlessSecurityConfigClass;
}

export interface OpensearchserverlessSecurityConfigClass {
    /** (Required) The unique identifier of the security configuration. */
    id: any;
}