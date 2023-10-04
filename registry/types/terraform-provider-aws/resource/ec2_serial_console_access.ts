export interface Ec2SerialConsoleAccess {
    resource: Resource[];
}

export interface Resource {
    ec2_serial_console_access: Ec2SerialConsoleAccessClass;
}

export interface Ec2SerialConsoleAccessClass {
    /** (Optional) Whether or not serial console access is enabled. Valid values are `true` or `false`. Defaults to `true`. */
    enabled?: any;
}