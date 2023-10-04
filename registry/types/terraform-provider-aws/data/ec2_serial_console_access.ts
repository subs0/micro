export interface Ec2SerialConsoleAccess {
    data: Datum[];
}

export interface Datum {
    ec2_serial_console_access: Ec2SerialConsoleAccessClass;
}

export interface Ec2SerialConsoleAccessClass {
}