export interface LambdaFunctions {
    data: Datum[];
}

export interface Datum {
    lambda_functions: LambdaFunctionsClass;
}

export interface LambdaFunctionsClass {
    "The resource does not support any arguments."?: any;
}