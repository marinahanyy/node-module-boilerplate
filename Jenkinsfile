pipeline {
    agent any

    environment {
        NODEJS_HOME = 'C:\\Program Files\\nodejs'  // Adjust the path to your Node.js installation directory
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

                // Run npm audit fix first if needed
                bat 'npm audit fix'

                // Run npm audit to get more details
                bat 'npm audit'

                powershell 'npm run lint -- --config .eslintrc.json > lint_output.txt'
                bat 'type lint_output.txt'
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
