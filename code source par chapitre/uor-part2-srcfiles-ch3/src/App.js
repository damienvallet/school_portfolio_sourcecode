/**
 * File Name: App.js
 * Description: composant principal de l'application
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: Created for UOR course
 * Language: JavaScript
 */

//Importation de la librairie Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Importation de la feuille de style
import "./stylesheet/style.css";

// Importation des composants
import NavigationHeader from "./NavigationHeader";
import Metadata from "./Metadata";

function App() {
  return (
    // une balise div qui encapsule le code HTML
    <div className="App">
      {/* composant pour les métadonnées*/}
      <Metadata />

      {/* composant pour la navigation*/}
      <NavigationHeader />
    </div>
  );
}

// export de la fonction App
export default App;
