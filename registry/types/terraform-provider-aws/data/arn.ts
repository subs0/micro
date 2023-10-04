export interface Arn {
    data: Datum[];
}

export interface Datum {
    /** (Required) ARN to parse. */
    arn: ArnClass;
}

export interface ArnClass {
    /** (Required) ARN to parse. */
    arn: any;
}