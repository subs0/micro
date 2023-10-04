export interface MskBrokerNodes {
    data: Datum[];
}

export interface Datum {
    msk_broker_nodes: MskBrokerNodesClass;
}

export interface MskBrokerNodesClass {
    /** (Required) ARN of the cluster the nodes belong to. */
    cluster_arn: any;
}