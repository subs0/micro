export interface MedialiveChannel {
    resource: Resource[];
}

export interface Resource {
    medialive_channel: { [key: any]: string };
}