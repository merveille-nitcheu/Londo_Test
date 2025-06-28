# Déploiement d'une Application Angular avec Docker (avec SSR)

Ce projet contient un Dockerfile optimisé pour construire et déployer une application Angular statique avec Server-Side Rendering (SSR), servie via Nginx.

## Prérequis

Docker installé (testé avec Docker Desktop sur Windows/Linux/Mac)

## Cloner le depot git 

````git clone https://github.com/merveille-nitcheu/Londo_Test.git````

## Se positionner dans le repertoire 

````cd Londo_Test````


## Étapes de Build



### Exécution du conteneur

````docker compose up -d --build````

### Vider le cache

````docker builder prune --all --force````

L'application sera accessible via http://localhost:8080.
 