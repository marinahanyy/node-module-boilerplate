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
		        bat 'echo Current directory: %cd%'
		        bat 'npm --version'
		        bat 'npm config list'
		        bat 'npm install'
   			 }
		}


        // Add more stages as needed
    }

    post {
        always {
            // Clean up or additional actions after the stages
            echo 'Always running, regardless of success or failure!'
        }
    }
}
