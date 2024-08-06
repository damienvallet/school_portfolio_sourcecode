/**
 * File Name: index.js
 * Description: Configuration du serveur Express et connexion à MongoDB
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: Created for UOR course
 * Language: JavaScript
 */

// Importation des librairies
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Importation des routes
const commentaires = require('./Routes/commentaires')

// Initialisation de l'application et du port
const app = express()
const PORT = process.env.PORT || 5000

// configuration cors et bodyParser avec la méthode use
app.use(cors())
app.use(bodyParser.json())

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/base_livre_or', {

    // Si la connexion à la base de données est réussie, un message s'affiche dans la console
    }).then(() => console.log('Connected to MongoDB'))
    
    // Sinon un message d'erreur s'affiche dans la console
    .catch(err => console.error(err));

// Définition de la route pour les commentaires
app.use('/commentaires', commentaires)

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});