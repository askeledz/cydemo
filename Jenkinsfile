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
         stage('Run Cypress Tests') {
            steps {
                script {
                    def exitCode = sh(script: 'npm run cy:e2e', returnStatus: true)
                    if (exitCode != 0) {
                        error "Cypress tests failed with exit code ${exitCode}"
                    }
                }
            }
        }
        }
         post {
        always {
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'mochawesome-report', reportFiles: 'output.html', reportName: 'HTML Report', reportTitles: 'Report'])
        }
    }
}