export interface SignerSigningJob {
    data: Datum[];
}

export interface Datum {
    signer_signing_job: SignerSigningJobClass;
}

export interface SignerSigningJobClass {
    /** (Required) ID of the signing job on output. */
    job_id: any;
}