pipeline {
    agent any
    environment{
        repoLink="${env.repo_link}"
        repoName="${env.repo_name}"
        imageName="${env.image_name}"
    }
    stages {
        stage('checkout') {
            steps {
                git branch: 'master',
                credentialsId: 'github-repo-credential',
                url: "${repoLink}${repoName}.git"
            }
        }
        
        stage("Build  Docker Image"){
            steps{
                script{
                    //Build docker image
                    // def imageExists = sh(script: "docker inspect -f '{{.Id}}' $imageName", returnStatus: true, returnStdout: true, outFile: 'outputResult.txt')
                    def imageExists = sh(script: "docker inspect -f '{{.Id}}' $imageName > outputResult.txt", returnStatus: true)
                    if(imageExists==0){
                        echo "Docker image $imageName already exists . skipping build"
                    }else{
                        sh 'docker build -t $imageName -f Dockerfile .'
                    }

                }
            }
            
        }
        stage("Docker-ps"){
            steps{
                script{
                    sh 'docker ps'
                }
            }
            
        }
        stage("run-the-shell-script"){
            steps{
                script{
                    sh'./docker_push_file.sh'
                }
            }
        }

        
    }
}
