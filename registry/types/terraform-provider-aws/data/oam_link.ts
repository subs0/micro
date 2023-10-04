export interface OamLink {
    data: Datum[];
}

export interface Datum {
    oam_link: OamLinkClass;
}

export interface OamLinkClass {
    /** (Required) ARN of the link. */
    link_identifier: any;
}