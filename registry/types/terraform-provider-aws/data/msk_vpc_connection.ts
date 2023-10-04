export interface MskVpcConnection {
    data: Datum[];
}

export interface Datum {
    msk_vpc_connection: MskVpcConnectionClass;
}

export interface MskVpcConnectionClass {
    /** (Required) ARN of the VPC Connection. */
    arn: any;
}