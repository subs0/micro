export interface Macie2Account {
    resource: Resource[];
}

export interface Resource {
    macie2_account: Macie2AccountClass;
}

export interface Macie2AccountClass {
    /**  (Optional) Specifies how often to publish updates to policy findings for the account. This includes publishing updates to AWS Security Hub and Amazon EventBridge (formerly called Amazon CloudWatch Events). Valid values are `FIFTEEN_MINUTES`, `ONE_HOUR` or `SIX_HOURS`. */
    finding_publishing_frequency?: any;
    /** (Optional) Specifies the status for the account. To enable Amazon Macie and start all Macie activities for the account, set this value to `ENABLED`. Valid values are `ENABLED` or `PAUSED`. */
    status?:                       any;
}