export interface IamPolicyDocument {
    data: Datum[];
}

export interface Datum {
    iam_policy_document: IamPolicyDocumentClass;
}

export interface IamPolicyDocumentClass {
    "The following arguments are optional:"?: any;
    "`statement`"?:                           any;
    "`condition`"?:                           any;
    "`principals` and `not_principals`"?:     any;
}