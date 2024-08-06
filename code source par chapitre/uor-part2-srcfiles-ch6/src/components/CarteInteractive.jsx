/**
* File Name: CarteInteractive.jsx
* Description: Composant pour afficher une carte interactive 
* Author: Damien Vallet
* Version: 1.0
* Date: 2024
* License: Created for UOR course
* Language: JavaScript
*/

// Importation de la bibliothèque React
import React, { useState, useEffect } from "react";

// Importation de la bibliothèque Leaflet 
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

// Fonction pour traduire la catégorie des sites
const translateCategory = (category) => {
    switch (category) {
        case "venue-olympic":
            return 'Site Olympique';
        case "venue-paralympic":
            return 'Site Paralympique';
        default:
            return 'Inconnu';
    }
};

// fonction onEachFeature pour afficher les informations de chaque feature
const onEachFeature = (feature, layer) => {

    // Vérification de l'existence des propriétés
    if (feature.properties) {

        // Contenu du popup
        const popupContent = `
        <p><strong>Site:</strong> ${feature.properties.nom_site}</p>
        <p><strong>Catégorie:</strong> ${translateCategory(feature.properties.category_id)}</p>
        <p><strong>Discipline:</strong> ${feature.properties.sports}</p>
        `;

        // Ajout du contenu au popup
        layer.bindPopup(popupContent);
    }
};

// Définition du composant CarteInteractive
function CarteInteractive() {

    // Utilisation du hook useState pour définir l'état de la variable geoJsonData
    const [geoJsonData, setGeoJsonData] = useState(null);

    // Utilisation du hook useEffect pour importer les données GeoJSON
    useEffect(() => {

        // Importation des données GeoJSON
        fetch(`${process.env.PUBLIC_URL}/data/paris-2024-sites-de-competition.geojson`)

            // Conversion des données en JSON
            .then(response => response.json())

            // Mise à jour de la variable geoJsonData
            .then(data => setGeoJsonData(data))

            // Gestion des erreurs
            .catch(error => console.error('Error fetching GeoJSON:', error));
    }, []);

    return (
        // Carte interactive
        <div className="container mt-5">

            {/* titre de la carte */}
            <h1 className="text-center mb-4">Carte Interactive des Sites de Compétition des JO 2024</h1>

            {/* Carte interactive */}
            <div id="map" className="map border rounded shadow-sm">

                {/* Carte Leaflet */}
                <MapContainer center={[48.8566, 2.3522]} zoom={13} scrollWheelZoom={false} style={{ height: "900px", width: "100%" }}>

                    {/* Calque de tuiles OpenStreetMap */}
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* On affiche les marqueurs issus des données GeoJSON */}
                    {geoJsonData && <GeoJSON data={geoJsonData} onEachFeature={onEachFeature} />}
                </MapContainer>
            </div>
        </div>
    );
}

// Exportation du composant CarteInteractive
export default CarteInteractive;