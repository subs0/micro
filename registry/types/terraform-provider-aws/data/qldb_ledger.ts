export interface QldbLedger {
    data: Datum[];
}

export interface Datum {
    qldb_ledger: QldbLedgerClass;
}

export interface QldbLedgerClass {
    /** (Required) Friendly name of the ledger to match. */
    name: any;
}