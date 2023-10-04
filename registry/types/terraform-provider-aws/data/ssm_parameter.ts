export interface SsmParameter {
    data: Datum[];
}

export interface Datum {
    ssm_parameter: SsmParameterClass;
}

export interface SsmParameterClass {
    /** (Required) Name of the parameter. */
    name:             any;
    /** (Optional) Whether to return decrypted `SecureString` value. Defaults to `true`. */
    with_decryption?: any;
    /** ARN of the parameter. */
    arn?:             any;
    /** Type of the parameter. Valid types are `String`, `StringList` and `SecureString`. */
    type?:            any;
    /** Value of the parameter. This value is always marked as sensitive in the Terraform plan output, regardless of `type`. In Terraform CLI version 0.15 and later, this may require additional configuration handling for certain scenarios. For more information, see the [Terraform v0.15 Upgrade Guide](https://www.terraform.io/upgrade-guides/0-15.html#sensitive-output-values). */
    value?:           any;
    /** Value of the parameter. **Use caution:** This value is never marked as sensitive. */
    insecure_value?:  any;
    /** Version of the parameter. */
    version?:         any;
}