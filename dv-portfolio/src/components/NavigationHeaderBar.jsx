/**
* File Name: NavigationHeaderBar.jsx
* Description: Composant qui gère la barre pour naviguer entre les versions
* Author: Damien Vallet
* Version: 1.0
* Date: 2024
* License: Created for UOR course
* Language: JavaScript
*/

// Importation de la librairie React
import React from "react";

// Importation de la librairie React Router
import { Link } from "react-router-dom";

// définition du composant NavBar
function NavigationHeaderBar() {
  return (

    // Barre de navigation
    <nav id="header-navbar">
      {/* Une liste non ordonnée (<ul>) définit les éléments de navigation. Chaque élément de navigation est un élément de liste (<li>)*/}
      <ul>
        <li>
          {/* Lien vers la version HTML */}
          <Link to="/html">Version HTML</Link>
        </li>
        <li>
          {/* Lien vers la version avec CSS/Bootstrap */}
          <Link to="/css">Version CSS</Link>
        </li>
        <li>
          {/* lien vers la version PHP avec base SQL */}
          <Link to="/php">Version PHP</Link>
        </li>
        <li>
          {/* lien vers la version avec MongoDB */}
          <Link to="/mongo">Version MongoDB</Link>
        </li>
        <li>
          {/* Lien vers la version du site contenant des animations en JavaScript */}
          <Link to="/js">Version JavaScript</Link>
        </li>
        <li>
          {/* Lien vers la carte interactive */}
          <Link to="/carte">Carte Interactive</Link>
        </li>
      </ul>
    </nav>
  );
}

// Exportation du composant NavigationHeaderBar
export default NavigationHeaderBar;
