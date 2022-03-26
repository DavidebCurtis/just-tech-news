build:
	docker build -t just-tech-news:latest -f Dockerfile .

tag:
	docker tag just-tech-news:latest mcereal/just-tech-news:latest

push:
	docker push mcereal/just-tech-news:latest