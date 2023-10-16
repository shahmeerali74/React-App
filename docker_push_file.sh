#!/bin/bash

# Log in to Docker Hub
docker login -u shahmeerali -p dckr_pat_kNZq1NIyq-LYmwyyWrNRxTMJ-cQ

# Tag the Docker image with the version (e.g., $BUILD_NUMBER)
docker tag $imageName:latest shahmeerali/$imageName:$BUILD_NUMBER

# Push the tagged image to Docker Hub
docker push shahmeerali/$imageName:$BUILD_NUMBER