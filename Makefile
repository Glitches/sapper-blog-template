.phony: build up down start stop restart shell

build:
	docker-compose build
up:
	docker-compose up -d
down:
	docker-compose down
start:
	docker-compose start
stop:
	docker-compose stop
restart:
	docker-compose restart
shell:
	docker-compose exec personal_page sh
dev:
	docker-compose run personal_page npm run dev -- --host