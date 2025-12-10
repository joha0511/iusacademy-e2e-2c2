pipeline {
  agent any

  tools {
    nodejs "Node18"  
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Instalar dependencias') {
      steps {
        bat 'npm ci'
      }
    }

    stage('Instalar navegadores Playwright') {
      steps {
        bat 'npx playwright install'
      }
    }

    stage('Ejecutar tests E2E') {
      steps {
        bat 'npm run test:ci'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true

      publishHTML(target: [
        reportDir: 'playwright-report',
        reportFiles: 'index.html',
        reportName: 'Playwright Report',
        keepAll: true,
        alwaysLinkToLastBuild: true,
        allowMissing: true
      ])
    }
  }
}
