/**
 * @fileoverview Utilitaire pour insérer des données initiales dans la base de données.
 * @module utils/dataSeeder
 */

const Player = require("../models/Player");

/**
 * Insère les données initiales dans la table 'players'.
 * @returns {Promise<void>} Une promesse résolue une fois les données insérées.
 */
async function seedPlayers() {
  try {
    // Vérifier si des joueurs existent déjà
    const count = await Player.count();
    if (count > 0) {
      console.log(
        "Les données initiales existent déjà, aucune insertion nécessaire."
      );
      return;
    }

    const players = [
      { name: "Cristiano Ronaldo", position: "forward", number: 7 },
      { name: "Paulo Dybala", position: "forward", number: 10 },
      { name: "Giorgio Chiellini", position: "defender", number: 3 },
    ];

    await Player.bulkCreate(players);
    console.log("Données initiales insérées dans la table 'players'.");
  } catch (error) {
    console.error("Erreur lors de l'insertion des données initiales :", error);
  }
}

module.exports = { seedPlayers };
