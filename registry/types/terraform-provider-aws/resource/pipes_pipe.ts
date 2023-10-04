export interface PipesPipe {
    resource: Resource[];
}

export interface Resource {
    pipes_pipe: { [key: any]: string };
}