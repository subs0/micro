export interface OrganizationsResourceTags {
    data: Datum[];
}

export interface Datum {
    organizations_resource_tags: OrganizationsResourceTagsClass;
}

export interface OrganizationsResourceTagsClass {
    /** 

You can specify any of the following taggable resources.

* AWS account – specify the account ID number.
* Organizational unit – specify the OU ID that begins with `ou-` and looks similar to: `ou-1a2b-34uvwxyz`
* Root – specify the root ID that begins with `r-` and looks similar to: `r-1a2b`
* Policy – specify the policy ID that begins with `p-` and looks similar to: `p-12abcdefg3` */
    resource_id: any;
}