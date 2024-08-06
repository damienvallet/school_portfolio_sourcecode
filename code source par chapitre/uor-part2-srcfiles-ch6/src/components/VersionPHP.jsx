/**
* File Name: VersionPHP.jsx
* Description: Page Principale avec formulaire qui utilise un serveur PHP
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
import { ReactComponent as Soundwave } from '../img/soundwave.svg';

// Importation du composant vidéo
import videopres from "../img/UOR-ch2-video.mov";
import Formulaire from "./Formulaire.jsx";

// définition du composant versionPHP
function versionPHP() {
  return (

    // retourne le code HTML
    <div id="main">

      {/* ouverture de la balise header */}
      <header id="header" className="p-3 bg-dark text-light text-center">

        {/* création d'un container */}
        <div className="container-fluid">

          {/* création d'une ligne */}
          <div className="row">

            {/* création d'une colonne */}
            <div className="col-12 col">

              {/* titre de la page */}
              <h1 className="display-1 hero-title">Damien Vallet</h1>
              <h2 className="display-2">Portofolio</h2>
              <h3>Audio & Product Design / Programmation</h3>
            </div>
          </div>
        </div>
        <hr />

        {/* navbar */}
        <nav id="navbar" className="navbar bg-dark text-light">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <Soundwave className="px-2" style={{ fill: 'white', height: '40px', width: '40px' }} />
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a className="nav-link px-2 text-light" href="#main">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link px-2 text-light" href="#whoami">
                    Présentation
                  </a>
                </li>
                <li>
                  <a className="nav-link px-2 text-light" href="#projets">
                    Projets
                  </a>
                </li>
                <li>
                  <a className="nav-link px-2 text-light" href="#contact">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* section Présentation */}
      <section id="whoami">
        <div className="container p-5">
          <div className="row">
            <div className="col">
              <h2>
                <span className="title">Présentation</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <p className="text-start">
              <span className="lettrine">J</span>e suis designer sonore,
              compositeur et programmeur. Passionné par la <strong>musique</strong>, les <strong>processus créatifs</strong> ainsi que la <strong>science</strong> et la <strong>technologie</strong>, je travaille
              depuis 2009 pour la société francaise&nbsp;
              <a href="https://www.uvi.net" target="_blank" rel="noreferrer">
                <strong>UVI Sounds and Software</strong>
              </a>
              .
            </p>
            <p className="text-start">
              Pendant ces années, j'ai participé à la conception et au
              développement de nombreux instruments virtuels tels que :
              &nbsp;<strong>Soul Drums</strong>
              &nbsp;et&nbsp; <strong>Glass Orchestra</strong>.
            </p>
            <p className="text-start">
              J'ai également apporté ma contribution à des projets de
              composition et de production musicale pour des artistes tel que
              &nbsp;<strong>Mc Solaar</strong>, &nbsp; <strong>Fred Rister</strong> (
              <strong>David Guetta</strong>),&nbsp; <strong>I Love UFO</strong>,
              &nbsp;<strong>Martin Guerre</strong>,&nbsp; <strong>Agille</strong>,
              &nbsp;<strong>The Black Mental</strong>...
            </p>
            <p className="text-start">
              Depuis 2023, je suis étudiant en license informatique à
              l'université Paris 8.
            </p>
          </div>
        </div>
      </section>

      {/* section Video */}
      <section id="video">
        <div className="container p-5">
          <div className="row">
            <div className="col">
              <h2>
                <span className="title">Vidéo de présentation</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <figure>
                <div className="embed-responsive embed-responsive-4by3 d-flex justify-content-center">
                  <video src={videopres} controls width="320" height="240" className="embed-responsive-item"></video>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* section Projets */}
      <section id="projets">
        <div className="container p-5 custom-gradient ">
          <div className="row">
            <div className="col">
              <h2>
                <span className="title"> Projets </span>
              </h2>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col ratio ratio-16x9">
              <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/LHycQ7z5rUE?si=fkmdlyK2lCbW6rwj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <div className="col">
              <a
                href="https://www.uvi.net/glass-orchestra"
                target="_blank"
                rel="noreferrer"
              >
                Glass Orchestra
              </a>
              &nbsp; by UVI Sounds and Software
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col">
              <a
                href="https://www.uvi.net/en/bass-drums-perc/soul-drums.html"
                target="_blank"
                rel="noreferrer"
              >
                Soul Drums
              </a>
              &nbsp; by UVI Sounds and Software
            </div>
            <div className="col ratio ratio-16x9">
              <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/9N-y51YpAcQ?si=O2FHB0yuk1iwzv_z" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col ratio ratio-16x9">
              <iframe className="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/x4JVg3drMms?si=xGZqecbKc8XgB6ro" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="col">
              Mc Solaar &nbsp;
              <a href="https://youtu.be/x4JVg3drMms?feature=shared">
                <em>Les Mirabelles</em>
              </a>
              &nbsp; sur l'album Géopoétique (2017)
            </div>
          </div>
        </div>
      </section>

      {/* section Contact */}
      <section id="contact">
        <div className="container p-5">
          <div className="row">
            <h2>
              <span className="title">Contacts</span>
            </h2>
            <div className="col d-flex justify-content-center">
              <figure id="contact_mail">
                <a href="mailto:damienjdvallet@gmail.com">
                  <img src={picofme} alt="portait de Damien Vallet" width="270" height="250" className="img-fluid rounded mx-auto d-block" />
                  <p className="text-center">
                    Vous pouvez m'envoyer un <em>email</em>.
                  </p>
                </a>
              </figure>
            </div>
          </div>
          <div className="row p-5">
            <div className="col d-flex justify-content-center align-items-center">
              <a href="https://www.linkedin.com/in/damien-vallet-84464195/">
                <LinkedinIcon className="bg-light socials-icons" style={{ height: "3em", width: "3em" }} />
              </a>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <a href="https://github.com/damienvallet">
                <GithubIcon className="bg-light socials-icons" style={{ height: "3em", width: "3em" }} />
              </a>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <a href="https://mastodon.social/@darladada">
                <MastodonIcon className="bg-light socials-icons" style={{ height: "3em", width: "3em" }} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* section Livre d'or */}
      <section id="livredor">
        <Formulaire />
      </section>

      {/* footer */}
      <footer id="footmain" className="p-3 bg-dark text-light" >
        <div className="container">
          <div className="row">
            <div className="col">
              <p>2024 - Damien Vallet</p>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}

// Exportation du composant Main
export default versionPHP;
