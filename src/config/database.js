/**
 * @fileoverview Configure la connexion à la base de données PostgreSQL avec Sequelize.
 * @module config/database
 */

const { Sequelize } = require("sequelize");
const pg = require("pg");
const dotenv = require("dotenv");
dotenv.config();

/**
 * Instance Sequelize configurée pour se connecter à PostgreSQL.
 *
 * @type {Sequelize}
 * @see {@link https://sequelize.org/ Sequelize Documentation}
 */
const sequelize = new Sequelize(
  process.env.PGDATABASE, // Nom de la base de données
  process.env.PGUSER, // Nom d'utilisateur de la base de données
  process.env.PGPASSWORD, // Mot de passe de l'utilisateur
  {
    host: process.env.PGHOST, // Hôte de la base de données
    dialect: "postgres", // Type de base de données utilisé
    dialectModule: pg, // Module dialecte PostgreSQL
    dialectOptions: {
      ssl: {
        require: true, // Requiert une connexion SSL
        rejectUnauthorized: false, // Autorise les certificats non vérifiés
      },
    },
  }
);

/**
 * Teste la connexion à la base de données PostgreSQL.
 * Affiche un message de succès si la connexion est établie, sinon un message d'erreur.
 */
sequelize
  .authenticate()
  .then(() => {
    console.log("La connexion à la base de données a bien été établie.");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données : ", err);
  });

module.exports = sequelize;
