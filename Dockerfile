# Utilisez une image de base Node.js pour la construction de l'application
FROM node:20 AS build

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copier les fichiers de package.json et package-lock.json pour installer les dépendances
COPY package*.json ./



# Copier tous les fichiers de l'application vers le conteneur
COPY . .

# Construire l'application Angular
RUN /bin/sh -c "npm install && npm run build"

# Utiliser une image de base légère pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits de l'étape précédente vers le répertoire d'hébergement NGINX
COPY --from=build /app/dist/e-couture-front /usr/share/nginx/html

# Exposer le port 80 pour le trafic HTTP
EXPOSE 4000

# La commande par défaut pour démarrer le serveur NGINX
CMD ["nginx", "-g", "daemon off;"]
