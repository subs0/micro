export interface IamPrincipalPolicySimulation {
    data: Datum[];
}

export interface Datum {
    iam_principal_policy_simulation: IamPrincipalPolicySimulationClass;
}

export interface IamPrincipalPolicySimulationClass {
    "The following arguments are required for any principal policy simulation:"?: any;
    "`context` block arguments"?:                                                 any;
}