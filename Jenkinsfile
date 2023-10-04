pipeline {
    agent any
    options{
        disableConcurrentBuilds()
    }
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
    }
}
