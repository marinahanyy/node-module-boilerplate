node {
    def NODEJS_HOME = 'C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Node.js'
    def PATH = "${NODEJS_HOME};${env.PATH}"

    stage('Checkout SCM') {
        checkout scm
    }

    stage('Install Dependencies') {
        echo 'Running npm install'
        bat 'npm install'
    }

    // Add more stages as needed
}

post {
    always {
        echo 'Always running, regardless of success or failure!'
    }
}
