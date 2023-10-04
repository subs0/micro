export interface ConnectPhoneNumber {
    resource: Resource[];
}

export interface Resource {
    connect_phone_number: ConnectPhoneNumberClass;
}

export interface ConnectPhoneNumberClass {
    /** (Required, Forces new resource) The ISO country code. For a list of Valid values, refer to [PhoneNumberCountryCode](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchAvailablePhoneNumbers.html#connect-SearchAvailablePhoneNumbers-request-PhoneNumberCountryCode). */
    country_code?: any;
    /** (Optional, Forces new resource) The description of the phone number. */
    description?:  any;
    /** (Optional, Forces new resource) The prefix of the phone number that is used to filter available phone numbers. If provided, it must contain `+` as part of the country code. Do not specify this argument when importing the resource. */
    prefix?:       any;
    /** (Optional) Tags to apply to the Phone Number. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    /** (Required) The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to. */
    target_arn:    any;
    /** (Required, Forces new resource) The type of phone number. Valid Values: `TOLL_FREE` | `DID`. */
    type?:         any;
}