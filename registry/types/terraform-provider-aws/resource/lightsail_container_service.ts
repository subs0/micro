export interface LightsailContainerService {
    resource: Resource[];
}

export interface Resource {
    lightsail_container_service: LightsailContainerServiceClass;
}

export interface LightsailContainerServiceClass {
    /** (Required) The name for the container service. Names must be of length 1 to 63, and be */
    name:                     any;
    /** (Required) The power specification for the container service. The power specifies the amount of memory, */
    power:                    any;
    /** (Required) The scale specification for the container service. The scale specifies the allocated compute */
    scale:                    any;
    /** (Optional) A Boolean value indicating whether the container service is disabled. Defaults to `false`. */
    is_disabled?:             any;
    /** (Optional) The public domain names to use with the container service, such as example.com */
    public_domain_names?:     any;
    /** (Optional) An object to describe the configuration for the container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. See [Private Registry Access](#private-registry-access) below for more details. */
    private_registry_access?: any;
    /** (Optional) Map of container service tags. To tag at launch, specify the tags in the Launch Template. If */
    tags?:                    any;
    /** (Optional) Describes a request to configure an Amazon Lightsail container service to access private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. See [ECR Image Puller Role](#ecr-image-puller-role) below for more details. */
    ecr_image_puller_role?:   any;
    /** (Optional) A Boolean value that indicates whether to activate the role. The default is `false`. */
    is_active?:               any;
}