pipeline {
    agent none
    environment {
        registry = "ghazanfar9131/resume"
        registryCredential = 'dockerhub_id'
        dockerImage = ''
        dockerImageRpi = ''
        dockerfile = 'Dockerfile'
        rpiDockerFile = 'Dockerfile.rpi'
        dockerContainerName = 'resume'
        exposePortNum = '80'
    }

    stages {
        stage('Building Docker Image. ') {
            stages {
                stage("arm64") {
                    agent any
                    steps {
                        script {
                            dockerImageRpi = docker.build("${registry}:arm64", "-f ${rpiDockerFile} ./")
                        }
                    }
                }
                stage("amd64") {
                    agent any
                    steps {
                        script {
                            dockerImage = docker.build(registry)
                        }
                    }
                }
            }
        }
        stage('Stop Existing Docker Container. '){
            agent any
            steps{
                sh "docker stop ${dockerContainerName} || true"
            }
        }
        stage('Removing Existing Docker Container.'){
            agent any
            steps{
                sh "docker rm -f ${dockerContainerName} || true"
            }
        }
        stage('Create and Run new Container. '){
            agent any
            steps{
                sh "docker run -d --name ${dockerContainerName} -p ${exposePortNum}:80 ${registry}:arm64"
            }
        }
    }
}