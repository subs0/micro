export interface LightsailContainerServiceDeploymentVersion {
    resource: Resource[];
}

export interface Resource {
    lightsail_container_service_deployment_version: LightsailContainerServiceDeploymentVersionClass;
}

export interface LightsailContainerServiceDeploymentVersionClass {
    /** (Required) The name for the container service. */
    service_name:         any;
    /** (Required) A set of configuration blocks that describe the settings of the containers that will be launched on the container service. Maximum of 53. [Detailed below](#container). */
    container:            any;
    /** (Optional) A configuration block that describes the settings of the public endpoint for the container service. [Detailed below](#public_endpoint). */
    public_endpoint?:     any;
    /** (Required) The name of the container for the endpoint. */
    container_name:       any;
    /** (Required) The name of the image used for the container. Container images sourced from your Lightsail container service, that are registered and stored on your service, start with a colon (`:`). For example, `:container-service-1.mystaticwebsite.1`. Container images sourced from a public registry like Docker Hub don't start with a colon. For example, `nginx:latest` or `nginx`. */
    image:                any;
    /** (Optional) The launch command for the container. A list of string. */
    command?:             any;
    /** (Optional) A key-value map of the environment variables of the container. */
    environment?:         any;
    /** (Optional) A key-value map of the open firewall ports of the container. Valid values: `HTTP`, `HTTPS`, `TCP`, `UDP`. */
    ports?:               any;
    /** (Required) The port of the container to which traffic is forwarded to. */
    container_port:       any;
    /** (Required) A configuration block that describes the health check configuration of the container. [Detailed below](#health_check). */
    health_check:         any;
    /** (Optional) The number of consecutive health checks successes required before moving the container to the Healthy state. Defaults to 2. */
    healthy_threshold?:   any;
    /** (Optional) The number of consecutive health checks failures required before moving the container to the Unhealthy state. Defaults to 2. */
    unhealthy_threshold?: any;
    /** (Optional) The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. Defaults to 2. */
    timeout_seconds?:     any;
    /** (Optional) The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. Defaults to 5. */
    interval_seconds?:    any;
    /** (Optional) The path on the container on which to perform the health check. Defaults to "/". */
    path?:                any;
    /** (Optional) The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. Defaults to "200-499". */
    success_codes?:       any;
}