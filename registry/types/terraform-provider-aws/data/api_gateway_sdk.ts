export interface APIGatewaySDK {
    data: Datum[];
}

export interface Datum {
    api_gateway_sdk: APIGatewaySDKClass;
}

export interface APIGatewaySDKClass {
    /** (Required) Identifier of the associated REST API. */
    rest_api_id: any;
    /** (Required) Name of the Stage that will be exported. */
    stage_name:  any;
    /** (Required) Language for the generated SDK. Currently `java`, `javascript`, `android`, `objectivec` (for iOS), `swift` (for iOS), and `ruby` are supported. */
    sdk_type:    any;
    /** (Optional) Key-value map of query string parameters `sdk_type` properties of the SDK. For SDK Type of `objectivec` or `swift`, a parameter named `classPrefix` is required. For SDK Type of `android`, parameters named `groupId`, `artifactId`, `artifactVersion`, and `invokerPackage` are required. For SDK Type of `java`, parameters named `serviceName` and `javaPackageName` are required. */
    parameters?: any;
}