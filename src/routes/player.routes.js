const express = require("express");
const router = express.Router();
const playerController = require("../controllers/playerController.js");

/**
 * Route to get all players.
 * @route GET /players
 * @group Players
 * @param {object} req - Express request object.
 * @param {object} res - Express response object used to return the list of players.
 * @returns {object} 200 - List of players.
 * @returns {object} 401 - Authentication failed, user not authorized.
 * @returns {object} 403 - Invalid token, access denied.
 * @returns {object} 500 - Server error.
 */
router.get("/players", playerController.getPlayers);

module.exports = router;
