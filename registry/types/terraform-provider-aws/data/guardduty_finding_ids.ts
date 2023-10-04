export interface GuarddutyFindingIDS {
    data: Datum[];
}

export interface Datum {
    guardduty_finding_ids: GuarddutyFindingIDSClass;
}

export interface GuarddutyFindingIDSClass {
    /** (Required) ID of the GuardDuty detector. */
    detector_id: any;
}