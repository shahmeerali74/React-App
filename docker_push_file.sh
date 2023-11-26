#!/bin/bash
#env
dockerhubuser=$1
dockerhubpass=$2
# Log in to Docker Hub
docker login -u $dockerhubuser -p $dockerhubpass

# Tag the Docker image with the version (e.g., $BUILD_NUMBER)
docker tag $imageName:latest react-app/:$BUILD_NUMBER

# Push the tagged image to Docker Hub
docker push react-app/:$BUILD_NUMBER