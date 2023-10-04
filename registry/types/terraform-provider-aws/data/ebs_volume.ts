export interface EbsVolume {
    data: Datum[];
}

export interface Datum {
    ebs_volume: EbsVolumeClass;
}

export interface EbsVolumeClass {
    /** (Optional) If more than one result is returned, use the most */
    most_recent?: any;
    /** (Optional) One or more name/value pairs to filter off of. There are */
    filter?:      any;
}