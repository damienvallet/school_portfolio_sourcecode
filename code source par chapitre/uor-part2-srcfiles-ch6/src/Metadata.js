/**
* File Name: Metadata.js
* Description: Fichier de métadonnées
* Author: Damien Vallet
* Version: 1.0
* Date: 2024
* License: Created for UOR course
* Language: JavaScript
*/

// Importation de la librairie React
import React from "react";

// Importation de la librairie Helmet
import { Helmet } from "react-helmet";

// Définition du composant Metadata
function Metadata() {

  // variable contenant nos données structurées JSON-LD
  const ldJson = {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Damien Vallet",
    url: "http://www.damienvallet.art",
    sameAs: [
      "https://www.linkedin.com/in/damien-vallet-84464195",
      "https://github.com/damienvallet",
      "https://mastodon.social/@darladada",
    ],
  };

  return (

    // ouverture de la balise Helmet
    <Helmet>
    
      {/* Dublin Core Metadata */}
      <meta
        name="DC.title"
        content="Damien Vallet - Audio Product Designer - Portofolio"
      />
      <meta name="DC.creator" content="Damien Vallet" />
      <meta name="DC.subject" content="Audio Product Designer - Portofolio" />
      <meta name="DC.description" content="Portofolio de Damien Vallet." />
      <meta name="DC.language" content="fr" />

      {/* Open Graph Data */}
      <meta
        property="og:title"
        content="Damien Vallet - Audio Product Designer - Portofolio"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Portofolio de Damien Vallet - Audio Product Designer"
      />
      <meta property="og:image" content="./img/logo.jpg" />
      <meta property="og:url" content="http://www.damienvallet.art" />

      {/* LD JSON metadata */}
      <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
    </Helmet>
  );
}

// export du composant Metadata
export default Metadata;
