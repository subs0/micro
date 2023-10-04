export interface KeyPair {
    data: Datum[];
}

export interface Datum {
    key_pair: KeyPairClass;
}

export interface KeyPairClass {
    /** (Optional) Key Pair ID. */
    key_pair_id?:        any;
    /** (Optional) Key Pair name. */
    key_name?:           any;
    /** (Optional) Whether to include the public key material in the response. */
    include_public_key?: any;
    /**  (Optional) Custom filter block as described below. */
    filter?:             any;
    /** (Required) Name of the filter field. Valid values can be found in the [EC2 DescribeKeyPairs API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeKeyPairs.html). */
    name:                any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:              any;
}