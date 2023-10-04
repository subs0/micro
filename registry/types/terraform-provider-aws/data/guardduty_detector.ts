export interface GuarddutyDetector {
    data: Datum[];
}

export interface Datum {
    guardduty_detector: GuarddutyDetectorClass;
}

export interface GuarddutyDetectorClass {
    /** (Optional) ID of the detector. */
    id?: any;
}