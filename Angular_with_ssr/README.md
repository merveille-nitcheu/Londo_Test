# Déploiement d'une Application Angular avec Docker (avec SSR)

Ce projet contient un Dockerfile optimisé pour construire et déployer une application Angular statique avec Server-Side Rendering (SSR), servie via Nginx.

## Prérequis

Docker installé (testé avec Docker Desktop sur Windows/Linux/Mac)

## Étapes de Build

### Build de l'image Docker

```` docker build -t angular_ssr-app .````

### Exécution du conteneur

````docker run -d -p 4000:4000 --name angular_ssr-container angular_ssr-app````

### Vider le cache

````docker builder prune --all --force````

L'application sera accessible via http://localhost:8080.
