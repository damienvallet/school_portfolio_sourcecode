<?php
//
// File Name: traitement.php
// Description: Enregistre les commentaires dans la base de données
// Author: Damien Vallet
// Version: 1.0
// Date: 2024
// License: Created for UOR course
// Language: PHP
//

// on définit l'entête de la réponse en JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Inclusion du fichier de connexion à la base de données
include 'dbconn.php';

// On récupère les données du formulaire en JSON
$data = json_decode(file_get_contents('php://input'), true);

// On vérifie si les données sont bien présentes
if (isset($data['nom']) && isset($data['email']) && isset($data['age']) && isset($data['genre']) && isset($data['commentaire'])) {
    // On récupère les données du formulaire et on les protège contre les injections SQL
    $nom = htmlspecialchars($data['nom']);
    $email = htmlspecialchars($data['email']);
    $age = htmlspecialchars($data['age']);
    $genre = htmlspecialchars($data['genre']);
    $commentaire = htmlspecialchars($data['commentaire']);

    // On vérifie si l'email est valide
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Email invalide']);
        exit();
    }

    // On prépare la requête SQL avec la méthode prepare qui permet de protéger contre les injections SQL
    $sql = $conn->prepare("INSERT INTO commentaires (nom, email, age, gender, commentaire) VALUES (?, ?, ?, ?, ?)"); 

    // On utilise la fonction bindParam pour associer les valeurs aux paramètres de la requête SQL
    $sql->bind_param("ssiss", $nom, $email, $age, $genre, $commentaire);

    // On exécute la requête SQL
    if ($sql->execute()) {
        // si la requête a bien été exécutée, on renvoie un message de succès
        echo "Votre commentaire a bien été enregistré";
        echo json_encode(['success' => true, 'Votre commentaire a bien été enregistré']);
    } else {
        // si la requête n'a pas été exécutée, on renvoie un message d'erreur
        echo json_encode(['success' => false, 'Erreur lors de l\'enregistrement de votre commentaire']);
    }
} 
else {
    // si tous les champs ne sont pas remplis, on renvoie un message d'erreur
    echo json_encode(['success' => false, 'message' => 'Veuillez remplir tous les champs']);
}
?>
