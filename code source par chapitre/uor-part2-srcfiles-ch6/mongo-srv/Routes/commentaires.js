/**
 * File Name: commentaires.js
 * Description: Définition des routes pour les commentaires
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: Created for UOR course
 * Language: JavaScript
 */


// Importation des librairies
const express = require('express')
const router = express.Router();

// Importation du modèle Commentaire
const Commentaire = require('../Models/commentaire');

// Recupérer tous les commentaires
router.get('/', async (req, res) => {
    try {
        const commentaires = await Commentaire.find().sort({date: -1});
        res.json(commentaires);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Ajouter un nouveau commentaire avec la méthode POST
router.post('/', async (req, res) => {

    // on stocke les données du formulaire dans des variables
    const {nom, commentaire, age, email, genre} = req.body;

    // on vérifie si les champs sont vides
    if (!nom || !commentaire || !age || !email || !genre) {
        return res.status(400).json({message: 'Veuillez remplir tous les champs'});
    }

    // on test si la création du commentaire fonctionne
    try {
        // on crée un nouveau commentaire
        const newComment = new Commentaire({
            nom,
            age,
            email,
            genre,
            commentaire,
            date: new Date()
        });

        // on sauvegarde le commentaire dans la base de données
        const savedComment = await newComment.save();
        res.json({success: true, message: 'Commentaire ajouté avec succès'});
    // sinon on renvoie une erreur avec le statut 500 (erreur serveur)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// exportation du module
module.exports = router;