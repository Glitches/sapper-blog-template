.phony: build up down start stop restart shell

build:
	docker compose build
	docker compose run --rm personal_page npm install
up:
	docker compose up -d
down:
	docker compose down
start:
	docker compose start
stop:
	docker compose stop
restart:
	docker compose restart
shell:
	docker compose exec personal_page bash
dev:
	docker compose exec personal_page npm run dev 