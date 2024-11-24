/**
 * @fileoverview Définit le modèle Player pour l'application.
 * @module models/Player
 */

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

/**
 * Représente un joueur (Player) dans l'application.
 *
 * @typedef {Object} Player
 * @property {number} id - L'identifiant unique du joueur.
 * @property {string} name - Le nom du joueur.
 * @property {Enumerator} position - La position du joueur sur le terrain.
 * @property {number} number - Le numéro de maillot du joueur.
 */
const Player = sequelize.define(
  "Player",
  {
    /**
     * L'identifiant unique du joueur.
     * @type {number}
     */
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    /**
     * Le nom du joueur.
     * @type {string}
     */
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    /**
     * La position du joueur sur le terrain.
     * Peut être : "goalkeeper", "defender", "midfielder" ou "forward".
     * @type {Enumerator}
     */
    position: {
      type: DataTypes.ENUM("goalkeeper", "defender", "midfielder", "forward"),
      allowNull: false,
    },
    /**
     * Le numéro de maillot du joueur.
     * @type {number}
     */
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    /**
     * Nom de la table dans la base de données.
     * @type {string}
     */
    tableName: "players",
    timestamps: false,
  }
);

module.exports = Player;
