# Source: https://github.com/aws-samples/aws-lambda-inference-cdk-compute-blog/blob/main/ml-images/oci/Dockerfile

# Pull the base image with python 3.11 (-arm64) as a runtime for your Lambda
FROM public.ecr.aws/lambda/python:3.11-arm64

RUN yum install gcc -y

# add Rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y


# Copy the requirements for pip + huggingface transformers
#COPY requirements.txt ./

# Install the python requirements from requirements.txt
#RUN python3 -m pip install --upgrade pip
#RUN python3 -m pip install -r requirements.txt

# Copy the earlier created app.py file to the container
COPY app.py ./


# Load the BERT model from Huggingface and store it in the model directory
RUN mkdir model
RUN curl -L https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/pytorch_model.bin -o ./model/pytorch_model.bin
RUN curl https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/config.json -o ./model/config.json
RUN curl https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/tokenizer.json -o ./model/tokenizer.json
RUN curl https://huggingface.co/distilbert-base-uncased-distilled-squad/resolve/main/tokenizer_config.json -o ./model/tokenizer_config.json

# Load a second model
RUN mkdir model2
RUN curl -L https://huggingface.co/distilbert-base-cased-distilled-squad/resolve/main/pytorch_model.bin -o ./model2/pytorch_model.bin
RUN curl https://huggingface.co/distilbert-base-cased-distilled-squad/resolve/main/config.json -o ./model2/config.json
RUN curl https://huggingface.co/distilbert-base-cased-distilled-squad/resolve/main/tokenizer.json -o ./model2/tokenizer.json
RUN curl https://huggingface.co/distilbert-base-cased-distilled-squad/resolve/main/tokenizer_config.json -o ./model2/tokenizer_config.json

# Set the CMD to your handler
CMD ["app.lambda_handler"]