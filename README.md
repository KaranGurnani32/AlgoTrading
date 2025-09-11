# AlgoTrading Platform

A modern, full-stack algorithmic trading platform built with React and Spring Boot, designed for real-time trading operations and market analysis.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development Setup](#development-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## 🎯 Overview

AlgoTrading is a comprehensive trading platform that provides [ADD YOUR PROJECT DESCRIPTION HERE]

### Key Objectives
- [ADD OBJECTIVE 1]
- [ADD OBJECTIVE 2]
- [ADD OBJECTIVE 3]

## ✨ Features

### Current Features
- ✅ RESTful API with Spring Boot
- ✅ React-based responsive UI
- ✅ Docker containerization
- ✅ Hot-reload development environment
- ✅ Cross-Origin Resource Sharing (CORS) configured
- ✅ TypeScript for type safety

### Planned Features
- [ ] [ADD PLANNED FEATURE 1]
- [ ] [ADD PLANNED FEATURE 2]
- [ ] [ADD PLANNED FEATURE 3]
- [ ] Real-time WebSocket connections
- [ ] Authentication & Authorization
- [ ] Trading strategy implementation
- [ ] Market data integration
- [ ] Portfolio management

## 🛠 Tech Stack

### Backend
- **Java 17** - Programming language
- **Spring Boot 3.x** - Application framework
- **Spring Web** - REST API development
- **Maven** - Build tool and dependency management
- **Lombok** - Boilerplate code reduction
- [ADD ADDITIONAL BACKEND LIBRARIES AS NEEDED]

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Axios** - HTTP client for API calls
- **CSS3** - Styling
- [ADD ADDITIONAL FRONTEND LIBRARIES AS NEEDED]

### DevOps & Tools
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Git** - Version control
- **GitHub Actions** - CI/CD pipeline (optional)

## 📁 Project Structure

```
algotrading/
├── backend/                        # Spring Boot backend application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/              # Java source files
│   │   │   │   └── com/algotrading/
│   │   │   │       ├── controller/ # REST endpoints
│   │   │   │       ├── service/    # Business logic
│   │   │   │       ├── model/      # Data models
│   │   │   │       ├── dto/        # Data transfer objects
│   │   │   │       └── config/     # Configuration classes
│   │   │   └── resources/
│   │   │       ├── application.properties # Main configuration
│   │   │       └── static/         # Static resources
│   │   └── test/                  # Test files
│   ├── pom.xml                    # Maven dependencies
│   ├── Dockerfile                  # Backend container config
│   └── mvnw                       # Maven wrapper
│
├── frontend/                       # React frontend application (Vite)
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── services/              # API service layer
│   │   ├── types/                 # TypeScript type definitions
│   │   ├── utils/                 # Utility functions
│   │   ├── App.tsx                # Main app component
│   │   ├── App.css                # Main app styles
│   │   └── main.tsx               # Entry point (Vite uses main.tsx)
│   ├── public/                    # Static assets
│   ├── package.json               # NPM dependencies
│   ├── tsconfig.json              # TypeScript config
│   ├── vite.config.ts             # Vite configuration
│   ├── index.html                 # HTML entry point (in root for Vite)
│   └── Dockerfile                 # Frontend container config
│
├── docker-compose.yml             # Multi-container setup
├── .gitignore                     # Git ignore rules
├── .env.example                   # Environment variables template
└── README.md                      # This file
```

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your development machine:

### Required Software
- **Java JDK 17 or higher** - [Download](https://adoptium.net/)
  ```bash
  # Verify installation
  java -version
  ```
  
- **Node.js 18+ and npm 9+** - [Download](https://nodejs.org/)
  ```bash
  # Verify installation
  node --version
  npm --version
  ```

- **Git** - [Download](https://git-scm.com/)
  ```bash
  # Verify installation
  git --version
  ```

### Optional but Recommended
- **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop) (for containerized development)
- **Maven** (or use the included Maven wrapper)
  ```bash
  # Verify installation
  mvn --version
  ```

### Recommended IDE/Tools
- **IntelliJ IDEA** (Community or Ultimate) - For backend development
- **Visual Studio Code** - For frontend development
  - Extensions: ES7+ React/Redux/React-Native snippets, Prettier, ESLint
- **Postman** or **Insomnia** - For API testing

### System Requirements
- **RAM:** Minimum 4GB (8GB recommended)
- **Storage:** At least 1GB free space
- **OS:** Windows 10+, macOS 10.15+, or Linux (Ubuntu 20.04+)

## 📦 Installation

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/KaranGurnani32/AlgoTrading.git

# Navigate to project directory
cd algotrading
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# If using Spring Initializr, create project with:
# - Spring Web
# - Spring Boot DevTools
# - Lombok (optional)

# Make Maven wrapper executable (Mac/Linux)
chmod +x mvnw

# Download dependencies
./mvnw clean install

# For Windows use:
# mvnw.cmd clean install
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Or using yarn
# yarn install
```

## 🚀 Development Setup

### Quick Start - Running Both Services

Open two terminal windows for the best development experience:

#### Terminal 1: Backend (Spring Boot)

```bash
# Navigate to backend
cd backend

# Run Spring Boot application
./mvnw spring-boot:run

# For Windows:
# mvnw.cmd spring-boot:run

# Backend will start on http://localhost:8080
# You should see Spring Boot ASCII art when it starts successfully
```

Expected output:
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.x.x)

... Application started successfully on port 8080
```

#### Terminal 2: Frontend (React)

```bash
# Navigate to frontend
cd frontend

# Start React development server
npm start

# Frontend will start on http://localhost:3000
# Your default browser should open automatically
```

Expected output:
```
Compiled successfully!

You can now view algotrading-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

### Using Docker (Alternative Method)

If you prefer containerized development:

```bash
# From project root directory
# Build and start both services
docker-compose up --build

# Services will be available at:
# - Frontend: http://localhost:3000
# - Backend: http://localhost:8080

# To stop services
docker-compose down
```

### Using IDE

#### Backend with IntelliJ IDEA
1. Open IntelliJ IDEA
2. Choose **File → Open**
3. Select the `backend` folder
4. Wait for Maven to index and download dependencies
5. Locate `Application.java` or `BackendApplication.java`
6. Right-click and select **Run 'Application.main()'**
7. Check console for Spring Boot startup

#### Frontend with VS Code
1. Open VS Code
2. Choose **File → Open Folder**
3. Select the `frontend` folder
4. Open integrated terminal (`` Ctrl+` `` or `` Cmd+` ``)
5. Run `npm install` (first time only)
6. Run `npm start`
7. Browser will open automatically

## 🎮 Running the Application

### Development Commands

```bash
# Backend Commands
cd backend
./mvnw spring-boot:run          # Run application
./mvnw clean                     # Clean build files
./mvnw compile                   # Compile source code
./mvnw test                      # Run tests
./mvnw package                   # Create JAR file

# Frontend Commands
cd frontend
npm start                        # Start dev server
npm test                         # Run tests
npm run build                    # Create production build
npm run eject                    # Eject from Create React App (caution!)
```

### Accessing the Application

Once both services are running:

| Service | URL | Description |
|---------|-----|-------------|
| **Frontend** | http://localhost:3000 | React application UI |
| **Backend API** | http://localhost:8080 | Spring Boot API |
| **API Test Endpoint** | http://localhost:8080/api/info | Test if backend is running |

### Verifying Setup

1. **Backend Health Check:**
   ```bash
   curl http://localhost:8080/api/info
   ```
   Should return:
   ```json
   {
     "title": "AlgoTrading",
     "version": "1.0.0",
     "status": "RUNNING"
   }
   ```

2. **Frontend Check:**
   - Open http://localhost:3000
   - You should see "AlgoTrading" title displayed

## 🧪 Testing

### Backend Testing

```bash
cd backend

# Run all tests
./mvnw test

# Run specific test class
./mvnw test -Dtest=ApplicationTests

# Skip tests during build
./mvnw clean install -DskipTests
```

### Frontend Testing

```bash
cd frontend

# Run tests in interactive watch mode
npm test

# Run tests once (CI mode)
CI=true npm test

# Generate coverage report
npm test -- --coverage
```

## 🚢 Deployment

### Building for Production

#### Backend Build
```bash
cd backend

# Create JAR file
./mvnw clean package

# JAR will be created in target/ directory
# Run the JAR directly
java -jar target/algotrading-backend-0.0.1-SNAPSHOT.jar
```

#### Frontend Build
```bash
cd frontend

# Create optimized production build
npm run build

# Build files will be in build/ directory
# Can be served using any static file server
```

### Docker Deployment

```bash
# Build images
docker-compose build

# Run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

### Environment-Specific Configurations

[ADD YOUR DEPLOYMENT CONFIGURATIONS HERE]

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit with descriptive message**
   ```bash
   git commit -m "Add: description of your changes"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**

### Development Guidelines

#### Code Style
- **Java:** Follow standard Java conventions
- **React/TypeScript:** Follow ESLint rules
- **Commits:** Use clear, descriptive commit messages

#### Branch Naming
- `feature/` - New features
- `bugfix/` - Bug fixes
- `hotfix/` - Urgent fixes
- `docs/` - Documentation updates

## 🐛 Troubleshooting

### Common Issues and Solutions

#### Port Already in Use
**Error:** `Port 8080/3000 is already in use`

**Solution:**
```bash
# Find process using the port (Mac/Linux)
lsof -i :8080
kill -9 <PID>

# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

#### Maven Build Issues
**Error:** `Maven build failed`

**Solution:**
```bash
# Clear Maven cache
cd backend
./mvnw clean
rm -rf ~/.m2/repository
./mvnw install
```

#### Node Module Issues
**Error:** `Module not found` or `npm install` errors

**Solution:**
```bash
cd frontend
# Clear everything and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### CORS Issues
**Error:** `CORS policy blocked`

**Solution:**
- Ensure backend has CORS configured for http://localhost:3000
- Check if both services are running on correct ports

#### Spring Boot Won't Start
**Error:** `Application failed to start`

**Common Causes:**
- Java version mismatch (ensure Java 17+)
- Port already in use
- Missing dependencies

**Solution:**
```bash
# Check Java version
java -version

# Run with more details
./mvnw spring-boot:run --debug
```

#### React App Won't Compile
**Error:** `Failed to compile`

**Solution:**
```bash
# Check Node version (should be 18+)
node --version

# Clear and reinstall
cd frontend
rm -rf node_modules
npm install
```

### Getting Help

If you encounter issues:
1. Check existing [Issues](https://github.com/[YOUR-USERNAME]/algotrading/issues)
2. Review error messages carefully
3. Google the error message
4. Create a new issue with:
   - Error message
   - Steps to reproduce
   - Your environment (OS, Java version, Node version)

## 📄 License

[ADD YOUR LICENSE HERE - e.g., MIT, Apache 2.0, GPL]

---

## 🙏 Acknowledgments

[ADD ACKNOWLEDGMENTS HERE]

## 📞 Contact

- **Project Maintainer:** [YOUR NAME]
- **Email:** [YOUR EMAIL]
- **Project Link:** [https://github.com/YOUR-USERNAME/algotrading](https://github.com/YOUR-USERNAME/algotrading)

---

<p align="center">Built with ❤️ for algorithmic trading</p>