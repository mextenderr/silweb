#!/bin/bash

docker build -f Dockerfile -t silvanoweb .

docker container rm silvanoweb

docker run \
    -it \
    --name silvanoweb \
    --network host \
    -p 3000:3000 \
    -v $(pwd):/app \
    silvanoweb
