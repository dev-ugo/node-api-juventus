const { response } = require("express");
const Player = require("../models/Player");

/**
 * Get the list of all players.
 *
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - A promise that resolves with the list of players.
 */
exports.getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();
    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur: " + error.message });
  }
};
