export interface CallerIdentity {
    data: Datum[];
}

export interface Datum {
    caller_identity: CallerIdentityClass;
}

export interface CallerIdentityClass {
    "There are no arguments available for this data source."?: any;
}