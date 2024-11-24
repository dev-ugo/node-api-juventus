/**
 * @fileoverview Point d'entrée principal de l'application Express.
 * Configure le serveur, les middlewares et les routes.
 */

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const sequelize = require("../src/config/database");
const playerRoutes = require("../src/routes/player.routes");
const { seedPlayers } = require("../src/utils/dataSeeder"); // Import du seeder

// Charger les variables d'environnement
dotenv.config();

// Initialiser l'application Express
const app = express();
const PORT = process.env.PORT || 3000;

// === Configuration des middlewares ===

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Configurer le moteur de vues
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// === Configuration de la base de données ===

// Tester la connexion à la base de données
sequelize
  .authenticate()
  .then(() => console.log("Connexion à la base de données PostgreSQL réussie."))
  .catch((err) =>
    console.error("Impossible de se connecter à la base de données:", err)
  );

// Synchroniser les modèles avec la base de données
sequelize
  .sync({ force: false })
  .then(async () => {
    // Insérer des données après la synchronisation
    console.log("Base de données synchronisée.");
    await seedPlayers();
  })
  .catch((err) =>
    console.error(
      "Erreur lors de la synchronisation de la base de données:",
      err
    )
  );

// === Configuration des routes ===

// Routes de l'API pour les joueurs
app.use("/api", playerRoutes);

// Route de base pour vérifier si l'API fonctionne
app.get("/", (req, res) => {
  res.render("index");
});

// === Lancement du serveur ===
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
