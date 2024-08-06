<?php
//
// Nom ......... : affichage.php
// Rôle ........ : Affiche les commentaires du livre d'or
// Auteur ...... : Damien Vallet
// Version ..... : V0.1 du 2024
// Licence ..... : réalisé dans le cadre du cours de UOR
//

// on définit l'entête de la réponse en JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Inclusion du fichier de connexion à la base de données
include 'dbconn.php';

// On prépare la requête SQL pour récupérer les commentaires
$sql  = $conn->prepare("SELECT * FROM commentaires ORDER BY id DESC");

// On exécute la requête SQL
$sql->execute();

// On récupère les résultats de la requête SQL
$result = $sql->get_result();

// Initialisation d'un tableau pour les résultats
$comments = array();

// On vérifie si des résultats ont été retournés
if ($result->num_rows > 0) {
    // On parcourt tous les résultats et on les ajoute au tableau
    while ($row = $result->fetch_assoc()) {
        $comments[] = $row;
    }
}

// On encode le tableau en JSON
echo json_encode($comments);

// On ferme la connexion à la base de données
$conn->close();

?>
