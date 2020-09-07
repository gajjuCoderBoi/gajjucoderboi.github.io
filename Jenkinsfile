pipeline {
    agent none

    stages {
        stage('Building Docker Image. ') {
            environment {
                registry = "ghazanfar9131/resume"
                registryCredential = 'dockerhub_id'
                dockerImage = ''
                dockerImageRpi = ''
                dockerfile = 'Dockerfile'
                rpiDockerFile = 'Dockerfile.rpi'
            }

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
    }
}