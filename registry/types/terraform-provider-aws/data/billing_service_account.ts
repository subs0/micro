export interface BillingServiceAccount {
    data: Datum[];
}

export interface Datum {
    billing_service_account: BillingServiceAccountClass;
}

export interface BillingServiceAccountClass {
}