pipeline {
    agent any
    environment{
        repoLink="${env.repo_link}"
        repoName="${env.repo_name}"
        imageName="${env.image_name}"
        dockerHubUserName="${env.docker_hub_user}"
        dockerHubPass="${env.docker_hub_pass}"
        workspace="${env.workspace}"
        buildfile="${env.buildfile}"
        // Other environment variables
        scannerHome = tool 'SonarScanner'
        javaHome = tool 'Java11'        
    }

    stages {
        stage('checkout') {
            steps {
                git branch: 'main',
                credentialsId: 'github-repo-credential',
                url: "${repoLink}${repoName}.git"
            }
        }
        stage ('Prepare') {
            steps {
                script {
                    properties = readProperties file: "${workspace}/${buildfile}.properties"                   
                }
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
        
        stage("deploy-to-DockerHub"){
            steps{
                script{
                    sh 'chmod +x docker_push_file.sh'
                    sh "./docker_push_file.sh ${dockerHubUserName} ${dockerHubPass}"
                }
            }
        }

        stage("deploy_the_image"){
            steps{
                sh "chmod +x deploy.sh"
                sh "./deploy.sh ${properties.hostport} ${properties.appport} ${properties.container_name} ${properties.reponame} "
            }
            // uptil this satge all code is good
        }
        
        stage('building stage'){
            steps{
            nodejs(nodeJSInstallationName: 'nodejs'){
                sh "npm install"
            }
          }
        }
        stage('sonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('SonarServer') {
                        sh "${javaHome}/bin/java -version"
                        // sh "${tool("SonarScanner")}/bin/sonar-scanner -Dsonar.projectKey=nodejsapp -Dsonar.projectNname=nodejsapp"
                        sh "env JAVA_HOME=${javaHome} ${scannerHome}/bin/sonar-scanner"
                    }
                    
                }
            }
        }        

    }
}
