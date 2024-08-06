/**
* File Name: VersionHTML.jsx
* Description: Page principale avec HTML
* Author: Damien Vallet
* Version: 1.0
* Date: 2024
* License: Created for UOR course
* Language: JavaScript
*/

// Importation de la librairie React
import React from "react";

// Importation des images
import picofme from "../img/picofme.jpg";

// Importation des icônes
import { ReactComponent as LinkedinIcon } from "../img/linkedin.svg";
import { ReactComponent as GithubIcon } from "../img/github.svg";
import { ReactComponent as MastodonIcon } from "../img/mastodon.svg";

// importation du composant vidéo
import videopres from "../img/UOR-ch2-video.mov";

// définition du composant VersionHTML
function VersionHTML() {
  return (
    // retourne le code HTML
    <div id="main">

      {/* ouverture de la balise header */}
      <header>
        <div id="title-section">
          {/* Le titre de la page */}
          <h1 id="title">Damien Vallet</h1>
          <h3>Audio &amp; Product Design / Programmation</h3>
        </div>
      </header>
      <hr />

      {/* section Présentation */}
      <section id="whoami">
        <h2>Présentation</h2>
        <p>
          Je suis créateur de produit audio, designer sonore, compositeur et
          étudiant en informatique.
        </p>
        <p>
          Passionné par la musique, les processus de création ainsi que la
          technologie, je travaille depuis 2009 pour la société francaise&nbsp;
          <a href="https://www.uvi.net" target="_blank" rel="noreferrer">
            <strong>UVI Sounds and Software</strong>
          </a>
          .
        </p>
        <p>
          Pendant ces années, j'ai participé à la conception et au développement
          de nombreux instruments virtuels tels que :&nbsp;
          <strong>Soul Drums</strong>&nbsp; et &nbsp;
          <strong>Glass Orchestra</strong>.
        </p>
        <p>
          J'ai également apporté ma contribution à des projets de composition et
          de production musicale pour des artistes tel que &nbsp;
          <strong>Mc Solaar</strong>, &nbsp;<strong>Fred Rister</strong>&nbsp;(
          <strong>David Guetta</strong>), &nbsp;<strong>I Love UFO</strong>,
          &nbsp;<strong>Martin Guerre</strong>, &nbsp;<strong>Agille</strong>,
          &nbsp;<strong>The Black Mental</strong>...
        </p>
        <p>
          Depuis 2023, je suis étudiant en License informatique à l'université
          Paris 8.
        </p>
      </section>
      <hr />

      {/* section Video */}
      <section id="video">
        <figure>
          <h2>Vidéos de présentation.</h2>
          <video
            src={videopres}
            controls
            width="320"
            height="240"
            className="embed-responsive-item"
          ></video>
        </figure>
      </section>
      <hr />

      {/* section Projet */}
      <section id="project">
        <h2>Projets</h2>
        <ul>
          <li>
            <iframe width={560} height={315} src="https://www.youtube.com/embed/LHycQ7z5rUE?si=fkmdlyK2lCbW6rwj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <a
              href="https://www.uvi.net/glass-orchestra"
              target="_blank"
              rel="noreferrer"
            >
              Glass Orchestra
            </a>
            &nbsp; by UVI Sounds and Software
          </li>
          <li>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/9N-y51YpAcQ?si=O2FHB0yuk1iwzv_z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            <a
              href="https://www.uvi.net/en/bass-drums-perc/soul-drums.html"
              target="_blank"
              rel="noreferrer"
            >
              Soul Drums
            </a>
            &nbsp; by UVI Sounds and Software
          </li>
          <li>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x4JVg3drMms?si=xGZqecbKc8XgB6ro" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            Mc Solaar &nbsp;
            <a href="https://youtu.be/x4JVg3drMms?feature=shared">
              <em>Les Mirabelles</em>
            </a>
            &nbsp; sur l'album Géopoétique (2017)
          </li>
        </ul>
      </section>
      <hr />

      {/* section Contact */}
      <section id="contact">
        <h2>Contact</h2>
        <figure id="contact_mail">
          <a href="mailto:damienjdvallet@gmail.com">
            <p>
              Vous pouvez m'envoyer un <em>email</em>.
            </p>
            <img
              src={picofme}
              alt="portrait de Damien Vallet"
              width="220"
              height="250"
            />
          </a>
        </figure>
      </section>
      <hr />
      <footer>
        <p>&copy; 2024 - Damien Vallet - Audio Product Designer - Portofolio</p>
        <a href="https://www.linkedin.com/in/damien-vallet-84464195/">
          <LinkedinIcon />
        </a>
        <a href="https://github.com/damienvallet">
          <GithubIcon />
        </a>
        <a href="https://mastodon.social/@darladada">
          <MastodonIcon />
        </a>
      </footer>
    </div>
  );
}

// Export du composant VersionHTML
export default VersionHTML;
