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

        // Add more stages as needed
    }

    post {
        always {
            echo 'Always running, regardless of success or failure!'
        }
    }
}
