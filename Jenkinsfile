pipeline {
    agent any

    environment {
        NODEJS_HOME = 'C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Node.js'
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
                bat 'npm install'
            }
        }

        stage('Run Unit Tests') {
            steps {
                echo 'Running unit tests'
                bat 'npm test'  // Replace with the actual command for running your unit tests
            }
        }

        stage('Code Hygiene') {
            steps {
                echo 'Running code hygiene tasks'
                
                // Example: Run a linter
                bat 'npm run lint -- --fix'  
                
                // Example: Run a code formatter
                bat 'npm run format'  // Replace with the actual formatting command
            }
        }

        // Add more stages as needed
    }

    post {
        always {
            echo 'Always running, regardless of success or failure!'
        }
    }
}
