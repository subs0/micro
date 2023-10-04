export interface LightsailStaticIP {
    resource: Resource[];
}

export interface Resource {
    lightsail_static_ip: LightsailStaticIPClass;
}

export interface LightsailStaticIPClass {
    /** (Required) The name for the allocated static IP */
    name: any;
}