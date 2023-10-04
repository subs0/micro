export interface OamSink {
    data: Datum[];
}

export interface Datum {
    oam_sink: OamSinkClass;
}

export interface OamSinkClass {
    /** (Required) ARN of the sink. */
    sink_identifier: any;
}