export interface IamAccessKey {
    resource: Resource[];
}

export interface Resource {
    iam_access_key: IamAccessKeyClass;
}

export interface IamAccessKeyClass {
    /** (Optional) Either a base-64 encoded PGP public key, or a keybase username in the form `keybase:some_person_that_exists`, for use in the `encrypted_secret` output attribute. If providing a base-64 encoded PGP public key, make sure to provide the "raw" version and not the "armored" one (e.g. avoid passing the `-a` option to `gpg --export`). */
    pgp_key?: any;
    /** (Optional) Access key status to apply. Defaults to `Active`. Valid values are `Active` and `Inactive`. */
    status?:  any;
    /** (Required) IAM user to associate with this access key. */
    user:     any;
}