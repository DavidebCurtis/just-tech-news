build:
	docker build -t just-tech-news:v1.0.0 -f Dockerfile .

tag:
	docker tag just-tech-news:v1.0.0 mcereal/just-tech-news:v1.0.0

push:
	docker push mcereal/just-tech-news:v1.0.0