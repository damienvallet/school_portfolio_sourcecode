/**
* File Name: Formulaire.jsx
* Description: Formulaire de contact 
* Author: Damien Vallet
* Version: 1.0
* Date: 2024
* License: Created for UOR course
* Language: JavaScript
*/

// Importation de la bibliothèque React
import React, { useEffect, useState } from "react";

// Importation du fichier CSS dédié
import '../stylesheet/form.css';

function Formulaire() {
    // on crée un tableau de messages vide et on lui associe une fonction pour le modifier
    const [messages, setMessages] = useState([]);

    // on crée une fonction pour récupérer les messages
    const recupereMessages = async () => {
        // on récupère les messages du serveur
        const reponse = await fetch('http://localhost:8080/src/phpserver/affichage.php')

        // on récupère les données de la réponse
        const data = await reponse.json();

        // on met à jour le tableau de messages
        setMessages(data);
    }

    // on utilise le hook useEffect pour récupérer les messages
    useEffect(() => {
        recupereMessages();
    }, []);


    // on créé une fonction pour ajouté un message
    const ajouteMessage = async (message) => {
        // on envoie les données du formulaire au serveur
        const reponse = await fetch('http://localhost:8080/src/phpserver/traitement.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message),
        });

        // on vérifie si la requête a fonctionné
        if (!reponse.ok) {
            console.log('Une erreur est survenue');
            return;
        }
        // on récupère la réponse du serveur
        else {
            // on récupère les messages
            recupereMessages();
        }
    };

    // on crée un tableau de données de formulaire vide et on lui associe une fonction pour le modifier
    const [formDatas, setFormDatas] = useState({
        nom: '',
        commentaire: '',
        email: '',
        genre: 'n',
        age: ''
    });

    // on crée une fonction pour gérer les changements dans les champs du formulaire
    const handleChange = (e) => {

        // on récupère le nom et la valeur du champs
        const { name, value } = e.target;

        // on met à jour les données du formulaire
        setFormDatas({
            ...formDatas,
            [name]: value,
        });
    };

    // on gère l'envoi du formulaire
    const handleSubmit = (e) => {

        // on empêche le comportement par défaut du formulaire qui est de recharger la page
        e.preventDefault();

        // on appelle la fonction ajouteMessage avec les données du formulaire
        ajouteMessage(formDatas);

        // on réinitialise les données du formulaire
        setFormDatas({
            nom: '',
            commentaire: '',
            email: '',
            genre: 'n',
            age: ''
        });
    };

    return (
        <div>
            {/* création du formulaire */}
            <section id="livredor">
                <h2 className="title p-3">Livre d'or</h2>

                {/* <!--on envoie les données du formulaire la fonction handleSubmit--> */}
                <form onSubmit={handleSubmit}>

                    {/* champs "nom" */}
                    <div className="formulaire">
                        <label htmlFor="nom">nom :</label>
                        <input type="text" name="nom" id="nom" placeholder="toto" required
                            onChange={handleChange}
                            value={formDatas.nom}
                        />
                    </div>

                    {/* champs "commentaire" */}
                    <div className="formulaire">
                        <label htmlFor="commentaire">Message :</label>
                        <textarea name="commentaire" id="commentaire" placeholder="Entrez votre message ici : "
                            required
                            onChange={handleChange}
                            value={formDatas.commentaire}
                        />
                    </div>

                    {/* champs "email" */}
                    <div className="formulaire">
                        <label htmlFor="email">Email :</label>
                        <input type="email" name="email" id="email" placeholder="toto@zero.com" required
                            onChange={handleChange}
                            value={formDatas.email}
                        />
                    </div>

                    {/* champs "genre" */}
                    <div className="radio-container">
                        <label htmlFor="genre">Genre :</label>
                        <label htmlFor="homme">Homme</label>
                        <input type="radio" name="genre" defaultValue="h"
                            onChange={handleChange}
                        />
                        <label htmlFor="femme">Femme</label>
                        <input type="radio" name="genre" defaultValue="f"
                            onChange={handleChange}
                        />
                        <label htmlFor="non-binaire">Non-binaire</label>
                        <input type="radio" name="genre" defaultValue="n" defaultChecked
                            onChange={handleChange}
                        />
                    </div>

                    {/* champs "age" */}
                    <div className="formulaire">
                        <label htmlFor="age">Age :</label>
                        <input type="number" name="age" id="age" placeholder="18" required
                            onChange={handleChange}
                            value={formDatas.age}
                        />
                    </div>

                    {/* bouton d'envoi */}
                    <div className="formulaire">
                        <input type="submit" defaultValue="Envoyer" />
                    </div>
                </form>
                <section id="messages">
                    <h2 className="title p-3">Messages</h2>
                    <div className="col-12 p-3">

                        {/* <!-- on affiche les messages si il y en a --> */}
                        {Array.isArray(messages) && messages.length > 0 ? (

                            // on parcourt le tableau de messages
                            messages.map((message, index) => (

                                // pour chaque message on crée une carte
                                <div key={index} className="card mb-3">

                                    {/* // on affiche les données du message */}
                                    <div className="card-header d-flex flex-wrap justify-content-between">
                                        <p className="card-text px-2"><strong>Nom:</strong> {message.nom}</p>
                                        <p className="card-text px-2"><strong>Email:</strong> {message.email}</p>
                                        <p className="card-text px-2"><strong>Age:</strong> {message.age}</p>
                                        <p className="card-text px-2"><strong>Genre:</strong> {message.gender}</p>
                                        <p className="card-text px-2"><strong>Date:</strong> {message.date}</p>
                                    </div>

                                    {/* // on affiche le commentaire */}
                                    <div className="card-body">
                                        <p className="card-text"><strong>Commentaire:</strong> {message.commentaire}</p>
                                    </div>
                                </div>
                            ))
                        ) : (

                            // si il n'y a pas de messages, on affiche un message d'information
                            <p>No messages to display</p>
                        )}
                    </div>
                </section>
            </section>
        </div>
    );
}

// Exportation du composant Formulaire
export default Formulaire;