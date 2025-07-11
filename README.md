# 🏋️‍♀️ fitness-microservice

A Spring Boot Microservices-based Fitness Tracking Application built for learning and hands-on practice. It includes authentication, AI-driven activity recommendations, centralized configuration, service discovery, and a modern React frontend with secure OAuth2 login using Keycloak.

---

## 📚 Table of Contents

- Features
- Screenshots
  - Architecture Diagram
- Project Structure
- Getting Started
  - Clone the Repository
  - Run Microservices
  - Run the Frontend




---

## ✨ Features

- 🧩 Microservices Architecture using Spring Boot
- 🌐 Service Discovery with **Eureka**
- ⚙️ Centralized Configuration with **Spring Cloud Config Server**
- 🌉 API Gateway using **Spring Cloud Gateway**
- 🔐 OAuth2 & OpenID Connect Authentication with **Keycloak**
- 📡 Asynchronous Messaging with **RabbitMQ**
- 🧠 AI-Powered Recommendations using custom prompts
- 💻 React-based Frontend with **Redux** and secure login via PKCE Flow
- 🗃️ MongoDB / PostgreSQL as data stores
- 🐳 Ready for Docker-based deployment

---

## 🖼️ Screenshots

### 📊 Architecture Diagram
> A clear layout of services communicating via Eureka, Gateway, and RabbitMQ.

![Architecture Diagram](docs/images/Architecture.png)

---

## 🗂️ Project Structure

```text
fitness-microservice/
├── activityservice/          # Manages user activity data
├── aiservice/                # AI-based health recommendations
├── configserver/             # Centralized configuration server
├── eureka/                   # Eureka Service Registry
├── gateway/                  # API Gateway for routing requests
├── userservice/              # Handles user registration and profiles
├── fitness-app-frontend/     # Frontend built with React
└── package-lock.json
```
## 🛠️ Getting Started


🌀 Clone the Repository
```text

git clone https://github.com/shar7530/fitness-microservice.git
cd fitness-microservice
```

🚀 Run Microservices
```text

Make sure you have Java 20 and Maven installed.

Example: To run the User Service

cd userservice
./mvnw spring-boot:run

Repeat for each of the services:

activityservice
aiservice
gateway
eureka
configserver
```

✅ Ensure RabbitMQ and Keycloak are running.

💻 Run the Frontend
```text

Make sure you have Node.js and npm installed.

cd fitness-app-frontend
npm install
npm start

Frontend runs at: http://localhost:5173
```




