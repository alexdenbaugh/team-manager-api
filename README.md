# Team Manager API

## 📘 Project Description
**Team Manager API** is an experimental project built to explore and demonstrate modern API design patterns and best practices. While not intended for production use, it's built with professional standards to showcase:

- **Object-Oriented Design** with service layers and dependency injection
- **Relational Database** modeling with Prisma ORM
- **RESTful API** design with **Express**
- **Clean Architecture** principles and best practices
- **Docker** containerization for scalable deployment

This project serves as a technical demonstration and learning platform, implementing industry best practices in a controlled environment.

## 🧱 System Architecture

### Backend Stack
- **Node.js + Express** - Scalable server architecture
- **TypeScript** - Type safety and OOP patterns
- **PostgreSQL** - Robust relational database
- **Prisma ORM** - Type-safe database queries and migrations
- **Docker** - Containerization and deployment readiness

### Project Structure
```
/src
├── controllers/   # Request handling and response formatting
├── services/     # Business logic and data operations
├── routes/       # API endpoint definitions
├── types/        # TypeScript interfaces and types
└── utils/        # Shared utilities and helpers
```

## 🚀 Quick Start

### Environment Setup

1. Clone the repository
```bash
git clone https://github.com/alexdenbaugh/team-manager-api.git
cd team-manager-api
```

2. Set up environment variables
```bash
# Copy the example environment file
cp .env.example .env
```

3. Start the development environment
```bash
# First time setup
make clean-dev

# Subsequent development sessions
make dev
```

4. Access the application
- API: http://localhost:3000
- API Documentation: http://localhost:3000/api-docs
- Database: PostgreSQL running on port 5432

## 📡 API Documentation

The API is documented in two ways for different use cases:

1. **Quick Reference**: See [APIDOCS.md](./APIDOCS.md) for a complete API reference that can be viewed directly on GitHub.

2. **Interactive Documentation**: When running the application locally, visit http://localhost:3000/api-docs for an interactive Swagger UI.

## 🛠 Development Features

- **Type Safety**: Full TypeScript implementation
- **OOP Patterns**: Service-based architecture with dependency injection
- **Error Handling**: Centralized error handling with custom error types
- **Database**: Prisma migrations and type-safe queries
- **Testing**: Ready for unit and integration tests
- **Docker**: Multi-stage builds and development environment
- **Documentation**: Swagger UI and markdown documentation

## 🔍 Code Quality

- Clean code principles
- SOLID design patterns
- Consistent error handling
- Type-safe implementations
- Documented APIs and interfaces

## 🚀 Future Enhancements

- Redis caching layer
- Unit and integration tests
- CI/CD pipeline
- Azure cloud deployment
- Authentication and authorization

## 📦 Available Scripts

| Command           | Description                                      |
|------------------|--------------------------------------------------|
| `make dev`       | Start development environment                     |
| `make clean-dev` | Clean start with fresh containers                |
| `make migrate`   | Run database migrations                          |
| `make seed`      | Seed database with sample data                   |
| `npm run build`  | Build TypeScript to JavaScript                   |
| `npm run test`   | Run tests (placeholder)                          |

## Troubleshooting

### Port Conflicts
If you encounter port conflicts when starting the application:

1. For API port conflict (default 3000):
   - Change the PORT in your .env file: `PORT=3001`
   - Restart Docker containers: `make clean-dev`

2. For Database port conflict (default 5432):
   - Change the DB_PORT in your .env file: `DB_PORT=5433`
   - Update DATABASE_URL to match the new port
   - Restart Docker containers: `make clean-dev`

### Other Common Issues
1. Make sure no local PostgreSQL instance is running
   - Linux: `sudo systemctl stop postgresql`
   - Mac: `brew services stop postgresql`

2. If containers won't start:
   - Try a full reset: `make reset`
   - Check Docker logs: `make logs`
