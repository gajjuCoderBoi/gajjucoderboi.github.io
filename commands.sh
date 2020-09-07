#!/bin/bash

echo "Building nginx Docker Image"
docker build -t my-resume-nginx .

echo "tagging my-resume-nginx to localhost:5000/my-resume-nginx"
docker tag my-resume-nginx localhost:5000/my-resume-nginx

echo "Uploading resume Image to local registry..."
docker push localhost:5000/my-resume-nginx

#echo "Download resume Image..."
#docker pull lo

#Create and run new container
#docker run --name resume -d -p 80:80 localhost:5000/my-resume-nginx

#echo "Save Docker Image into .tar file to Export or Copy etc."
#echo "Saving Docker Image..."
#docker save my-resume-nginx -o  my-resume-nginx.tar
#echo "Saved Docker Image in PWD."
#
#echo "transfer the image to raspberry pi"
#scp my-resume-nginx.tar ubuntu@192.168.0.100:my-resume-nginx.tar
#echo "Transfer complete."

#Load docker image on rpi.
#docker load -i my-resume-nginx.tar

#Removing the existing container
#docker rm -f resume

#Create and run new container
#docker run --name resume -d -p 80:80 my-resume-nginx

