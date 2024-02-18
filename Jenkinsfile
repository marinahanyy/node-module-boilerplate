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
				
				echo 'Installing ESLint and Prettier'
            // Install ESLint and Prettier globally
                bat 'npm install -g eslint prettier'

				echo 'Installing Cypress for E2E testing (if needed)'
            // Install Cypress for E2E testing (optional, install if you have E2E tests)
                bat 'npm install -g cypress'
		bat 'npm install --save-dev react'

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

                powershell 'npm run lint -- --config .eslintrc.json > lint_output.txt'
                bat 'type lint_output.txt'
            }
        }

	stage('Run Code Formatter') {
            steps {
                echo 'Running code formatter'
                bat 'npm run format'
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
