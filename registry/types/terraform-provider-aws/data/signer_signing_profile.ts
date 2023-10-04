export interface SignerSigningProfile {
    data: Datum[];
}

export interface Datum {
    signer_signing_profile: SignerSigningProfileClass;
}

export interface SignerSigningProfileClass {
    /** (Required) Name of the target signing profile. */
    name: any;
}