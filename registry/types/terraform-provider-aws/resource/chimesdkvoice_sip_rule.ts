export interface ChimesdkvoiceSIPRule {
    resource: Resource[];
}

export interface Resource {
    chimesdkvoice_sip_rule: ChimesdkvoiceSIPRuleClass;
}

export interface ChimesdkvoiceSIPRuleClass {
    /** (Required) The name of the SIP rule. */
    name:                     any;
    /** (Required) List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used. See [`target_applications`](#target_applications). */
    target_applications:      any;
    /** (Required) The type of trigger assigned to the SIP rule in `trigger_value`. Valid values are `RequestUriHostname` or `ToPhoneNumber`. */
    trigger_type:             any;
    /** (Required) If `trigger_type` is `RequestUriHostname`, the value can be the outbound host name of an Amazon Chime Voice Connector. If `trigger_type` is `ToPhoneNumber`, the value can be a customer-owned phone number in the E164 format. The Sip Media Application specified in the Sip Rule is triggered if the request URI in an incoming SIP request matches the `RequestUriHostname`, or if the "To" header in the incoming SIP request matches the `ToPhoneNumber` value. */
    trigger_value:            any;
    /** (Optional) Enables or disables a rule. You must disable rules before you can delete them. */
    disabled?:                any;
    /** (Required) The AWS Region of the target application. */
    aws_region:               any;
    /** (Required) Priority of the SIP media application in the target list. */
    priority:                 any;
    /** (Required) The SIP media application ID. */
    sip_media_application_id: any;
}