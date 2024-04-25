/* groovylint-disable BlockStartsWithBlankLine, CompileStatic, LineLength */
pipeline {
    /* insert Declarative Pipeline here */
    agent any
    parameters {
        choice(name: 'env', choices: ['qa', 'staging', 'dev', 'prod'], description: 'Choose the environment where you want to execute')
        choice(name: 'suite', choices: ['all', 'smoke', 'regression'], description: 'Choose the suit you want to execute')
    }
    options {
        ansiColor('xterm')
    }
    //in case of linux
    tools { nodejs 'Node19' }

    stages {
        stage('Deploying') {
            steps {
                echo 'Deploying the app'
            }
        }
        stage('Testing') {
            steps {
                echo 'Running tests'
                script {
                        try {
                        //in case of Win OS use "bat" instead "sh"
                        sh 'npm install'
                        //sh "cypress run --env ENV=${env} --env SUITE=${suite} --browser chrome"
                        sh 'npm run cy:e2e'
                        }
                catch (e) {
                            error("Tests didn't finish successfully: ${e}")
                }
                }
            }
        }
        stage('Building') {
            steps {
                echo 'Building the app'
            }
        }
    }

    post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'mochawesome-report', reportFiles: 'output.html', reportName: 'HTML Report', reportTitles: 'Report'])
        }
    }
}
