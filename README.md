# Team Manager Api

## 📘 Project Description
**Team Manager API** is a RESTful backend service designed to manage users and their associated teams in a many-to-many relationship. This project was developed as part of a focused learning sprint/refresher to deepen expertise in backend architecture, **object oriented programming**, **relational database design**, and **cloud deployment readiness** for real-world, scalable applications.

## Table of Contents:

- [🧱 System Architecture Overview](#🧱-system-architecture-overview)
- [🧠 Key Features](#🧠-key-features)
- [🔍 Why This Project?](#🔍-why-this-project)
- [🚀 Goals](#🚀-goals)
- [🚀 Quick Start](#🚀-quick-start)
- [🛠 Development Commands](#🛠-development-commands)
- [📡 API Endpoints](#📡-api-endpoints)

## 🧱 System Architecture Overview

This project follows a layered structure using **TypeScript** and **OOP patterns**:

```
/src
/controllers → Handle HTTP requests and responses
/services → Business logic in reusable, testable classes
/routes → Define Express routes and connect to controllers
/models → Prisma schema and database interactions
/types → TypeScript interfaces and shared types
/utils → Utility functions (e.g., DB connection)
```
- Backend built with **Node.js + Express + TypeScript**
- **PostgreSQL** as relational DB, managed via **Prisma ORM**
- Containers orchestrated with **Docker + Docker Compose**
- Ready for CI/CD and cloud deployment (Azure-compatible)

## 🧠 Key Features
- Modular, OOP-based architecture using TypeScript classes and service layers
- PostgreSQL schema with many-to-many relationships and Prisma ORM
- Redis (optional) caching layer for performance optimization
- Full containerization via Docker and orchestration with Docker Compose
- Designed with scalability, maintainability, and best practices in mind
- CI/CD-ready and deployable to platforms like Azure or Render

## 🔍 Why This Project?
This project was created to demonstrate proficiency in technologies and patterns commonly used in modern backend engineering roles, particularly those emphasized in senior-level positions such as:
- Service abstraction and architecture design
- Relational database schema modeling and query logic
- Scalable application deployment with Docker
- Clean code principles and organized folder structure

## 🚀 Goals
- Solidify Node.js + Express knowledge beyond CRUD-level apps
- Practice applying SOLID principles and TypeScript for backend systems
- Build deployable, production-style infrastructure using Docker
- Create a live, shareable repo for interview conversations

## 🚀 Quick Start

To start development:

```bash
# First time setup
make clean-dev

# Subsequent development sessions
make dev

# Stop containers
make stop
```

## 🛠 Development Commands

### Makefile Commands (Infrastructure)
| Command           | Description                                                    |
|-------------------|----------------------------------------------------------------|
| `make dev`        | 🟢 Start development environment (normal daily use)            |
| `make clean-dev`  | 🧼 Clean start: stops local postgres, rebuilds containers     |
| `make stop`       | ⏹️ Stop all containers                                         |
| `make reset`      | 🛠 Complete reset (removes volumes too)                        |
| `make logs`       | 📄 View container logs                                         |
| `make shell-db`   | 🐘 Shell into database container                               |
| `make shell-api`  | 📦 Shell into API container                                    |
| `make migrate`    | 📂 Run database migrations                                     |
| `make seed`       | 🌱 Seed database with sample data                              |

### npm Scripts (Application)
| Command                | Description                                      |
|------------------------|--------------------------------------------------|
| `npm run dev:local`    | 🚀 Run API locally (without Docker)             |
| `npm run build`        | 🔨 Build TypeScript to JavaScript               |
| `npm run db:migrate`   | 📂 Apply database migrations using Prisma       |
| `npm run db:generate`  | 🔁 Regenerate Prisma client                     |
| `npm run db:seed`      | 🌱 Seed database with sample data               |
| `npm run test`         | 🧪 Run tests (placeholder for future)           |

## 📡 API Endpoints

| Method | Endpoint                  | Description                              |
|--------|---------------------------|------------------------------------------|
| GET    | `/users`                  | Fetch all users                          |
| POST   | `/users`                  | Create a new user                        |
| GET    | `/teams`                  | Fetch all teams                          |
| POST   | `/teams`                  | Create a new team                        |
| GET    | `/teams/:id/users`        | Get all users in a specific team         |
| POST   | `/teams/:id/users/:userId`| Add a user to a team                     |

<!-- ## ✅ What to Add After This
Once you're running:
- Add routes: /users, /teams, /teams/:id/users
- Add Redis (optional)
- Add error handling and middleware
- Add README and push to GitHub -->