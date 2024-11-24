# Juventus API

**Juventus API** est une API RESTful qui permet de gérer les informations des joueurs de l'équipe de football Juventus. L'API utilise **Node.js**, **Express**, et **PostgreSQL** pour stocker et récupérer des données sur les joueurs, telles que leur nom, leur position et leur numéro de maillot.

---

## **Technologies utilisées**

- **Node.js** : Environnement d'exécution JavaScript côté serveur.
- **Express** : Framework minimaliste pour construire des API RESTful.
- **Sequelize** : ORM pour gérer la base de données PostgreSQL.
- **PostgreSQL** : Base de données relationnelle utilisée pour stocker les informations des joueurs.
- **EJS** : Moteur de rendu utilisé pour générer des vues HTML dynamiques (utilisé pour l'interface si nécessaire).
- **Neon** : Service de base de données PostgreSQL cloud, utilisé pour avoir une base de données non locale.
- **Vercel** : Service de déploiement pour héberger l'API.

---

## **Fonctionnalités**

- **Récupérer tous les joueurs** : L'API expose un endpoint pour obtenir la liste complète des joueurs.
- **Gestion de la base de données** : Utilisation de Sequelize pour synchroniser les modèles avec PostgreSQL et insérer des données de manière efficace.
- **Déploiement sur Vercel** : L'API est déployée sur [Vercel](https://vercel.com) pour une mise en ligne rapide.

---

## **API Endpoints**

- **GET /api/players** : Récupère tous les joueurs de l'équipe Juventus.
    - **Réponse** : Liste des joueurs (nom, position, numéro de maillot).
  
---

## **Base de données**

La base de données PostgreSQL utilisée dans ce projet est hébergée sur **Neon**, une solution de base de données cloud.

---

## **Déploiement**

L'API est déployée sur **Vercel**. Vous pouvez y accéder en ligne à l'adresse suivante :

[https://node-api-juventus-lt812vuni-ugo-preiswerks-projects.vercel.app/](https://node-api-juventus-lt812vuni-ugo-preiswerks-projects.vercel.app/)
