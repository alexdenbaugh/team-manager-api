.PHONY: dev clean-dev stop reset logs shell-db shell-api

# Start development environment
dev:
	docker compose up

# Clean start (stops local postgres, rebuilds containers)
clean-dev:
	docker compose down
	docker compose up --build

# Stop all containers
stop:
	docker compose down

# Complete reset (removes volumes too)
reset:
	docker compose down -v
	docker compose up --build

# View logs
logs:
	docker compose logs -f

# Shell into database container
shell-db:
	docker compose exec db psql -U postgres -d teammanager

# Shell into API container
shell-api:
	docker compose exec api sh

# Run database migrations
migrate:
	docker compose exec api npm run db:migrate

# Seed database
seed:
	docker compose exec api npm run db:seed 