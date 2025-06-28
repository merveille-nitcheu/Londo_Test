# Déploiement d'une Application Angular avec Docker (sans SSR)

Ce projet contient un Dockerfile optimisé pour construire et déployer une application Angular statique sans Server-Side Rendering (SSR), servie via Nginx.

## Prérequis

Docker installé (testé avec Docker Desktop sur Windows/Linux/Mac)

## Étapes de Build

### Build de l'image Docker

```` docker build -t nestjs .````

### Exécution du conteneur

````docker run -d -p 3000:3000 --name nestjs-container nestjs````

### Vider le cache 



L'application sera accessible via http://localhost:8080.
