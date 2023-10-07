pipeline {
    agent any
    environment{
        repo_Link="${env.repo_link}"
        repo_Name="${env.repo_name}"
    }
    stages {
        stage('checkout') {
            steps {
                git branch: 'master',
                credentialsId: 'github-repo-credential',
                url: "${repo_Link}${repo_Name}.git"
            }
        }
        
        stage("Build  Docker Image"){
            steps{
                script{
                    //Build docker image
                    sh 'docker build -t react-app -f Dockerfile .'
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
        
    }
}
