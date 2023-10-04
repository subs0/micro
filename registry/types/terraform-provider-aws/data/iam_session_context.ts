export interface IamSessionContext {
    data: Datum[];
}

export interface Datum {
    iam_session_context: IamSessionContextClass;
}

export interface IamSessionContextClass {
    /** (Required) ARN for an assumed role. */
    arn: any;
}