#deploy the app
hostport=$1
appport=$2
cont_name=$3
reponame=$4
docker run -d -p $hostport:$appport --name $cont_name --rm $reponame/$imageName:$BUILD_NUMBER
