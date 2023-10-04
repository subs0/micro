export interface OutpostsAsset {
    data: Datum[];
}

export interface Datum {
    outposts_asset: OutpostsAssetClass;
}

export interface OutpostsAssetClass {
    /** (Required) Outpost ARN. */
    arn:      any;
    /** (Required) ID of the asset. */
    asset_id: any;
}