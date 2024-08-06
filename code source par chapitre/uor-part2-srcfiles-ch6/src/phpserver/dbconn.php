<?php
//
// File Name: dbconn.php
// Description: Connexion à la base de données
// Author: Damien Vallet
// Version: 1.0
// Date: 2024
// License: Created for UOR course
// Language: PHP
//

// on définit l'entête de la réponse en JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

// on définit les variables de connexion à la base de données
$servername = "localhost";
$username = "dada";
$password = "guestbook!";
$dbname = "base_livre_or";

// Connexion à la base de données
try{
    // on se connecte à la base de données
    $conn = new mysqli($servername, $username, $password, $dbname);

    
    // on vérifie la connexion
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    // on définit l'encodage des caractères
    $conn->set_charset("utf8");
    
} catch (Exception $e) {
    // en cas d'erreur, on affiche un message d'erreur
    echo "Erreur de connexion à la base de données";
    echo $e->getMessage();
    exit();
}
?>