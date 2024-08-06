/**
 * File Name: commentaire.js
 * Description: Modèle pour les commentaires
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: Created for UOR course
 * Language: JavaScript
 */


// Initialisation de la base de données
const mongoose = require('mongoose');

// Création du schéma
const CommentaireSchema = new mongoose.Schema({
    // Définition du champ nom
    nom: {
        type: String,
        required: true
    },
    
    // Définition du champ email
    email: {
        type: String,
        required: true
    },

    // Définition du champ date
    date: {
        type: Date,
        required: true
    },
    
    // Définition du champ age
    age: {
        type: Number,
        required: true
    },

    // Définition du champ genre
    genre: {
        type: String,
        required: true
    },

    // Définition du champ commentaire
    commentaire: {
        type: String,
        required: true
    }
});

// Export du modèle
module.exports = mongoose.model('commentaire', CommentaireSchema);