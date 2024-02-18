pipeline {
    agent any

    environment {
        NODEJS_HOME = 'C:\\Program Files\\nodejs'
        PATH = "${NODEJS_HOME};${env.PATH}"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Running npm install'
                catchError {
                    bat 'npm install'

      //               // Verify Cypress installation path
      //               bat 'dir node_modules\\cypress /s'
		    // bat 'npm install cypress@latest'

      //               // Run Cypress using full path
      //               bat '"C:\\Program Files\\nodejs\\node_modules\\.bin\\cypress" run'
                }
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Running unit tests'
                catchError {
                    bat 'npm run test'
                }
            }
        }
    }

    post {
        always {
            echo 'Always running, regardless of success or failure!'
        }
    }
}
