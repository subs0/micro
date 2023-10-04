export interface SagemakerPrebuiltEcrImage {
    data: Datum[];
}

export interface Datum {
    sagemaker_prebuilt_ecr_image: SagemakerPrebuiltEcrImageClass;
}

export interface SagemakerPrebuiltEcrImageClass {
    /** (Required) Name of the repository, which is generally the algorithm or library. Values include `blazingtext`, `factorization-machines`, `forecasting-deepar`, `image-classification`, `ipinsights`, `kmeans`, `knn`, `lda`, `linear-learner`, `mxnet-inference-eia`, `mxnet-inference`, `mxnet-training`, `ntm`, `object-detection`, `object2vec`, `pca`, `pytorch-inference-eia`, `pytorch-inference`, `pytorch-training`, `randomcutforest`, `sagemaker-scikit-learn`, `sagemaker-sparkml-serving`, `sagemaker-xgboost`, `semantic-segmentation`, `seq2seq`, `tensorflow-inference-eia`, `tensorflow-inference`, `tensorflow-training`, `huggingface-tensorflow-training`, `huggingface-tensorflow-inference`, `huggingface-pytorch-training`, and `huggingface-pytorch-inference`. */
    repository_name: any;
    /** (Optional) DNS suffix to use in the registry path. If not specified, the AWS provider sets it to the DNS suffix for the current region. */
    dns_suffix?:     any;
    /** (Optional) Image tag for the Docker image. If not specified, the AWS provider sets the value to `1`, which for many repositories indicates the latest version. Some repositories, such as XGBoost, do not support `1` or `latest` and specific version must be used. */
    image_tag?:      any;
}