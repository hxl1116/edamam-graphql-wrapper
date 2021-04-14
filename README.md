# Edamam Recipe Search API GraphQL Wrapper
A wrapper for Edamam's Recipe Search API made with GraphQL and Apollo Server.

## Installation
User Docker's command line to pull the image from Docker Hub
```bash
docker pull neutronchicken/ers-gql-wrap:latest
```

## Usage
Run a container with the `ers-gql-wrap` image
```bash
docker run --name=[container_name] -d -p [port]:8080 neutronchicken/ers-gql-wrap:latest
```

Optionally, provide the `PORT` environment variable with the `--env=PORT` flag.
Just be sure to match the container's port to `PORT`.
