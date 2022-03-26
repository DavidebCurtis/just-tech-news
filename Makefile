build:
	docker build -t just-tech-news:v1.0.0 -f Dockerfile .

tag:
	docker tag just-tech-news:v1.0.0 icr.io/playground/just-tech-news/just-tech-news:v1.0.0

push:
	docker push icr.io/playground/just-tech-news/just-tech-news:v1.0.0