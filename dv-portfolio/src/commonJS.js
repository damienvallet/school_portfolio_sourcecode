/**
 * File Name: commonJS.js
 * Description: fichier pour stocker nos fonctions communes
 * Author: Damien Vallet
 * Version: 1.0
 * Date: 2024
 * License: Created for UOR course
 * Language: JavaScript
 */

// fonction pour modifier la couleur du fond de la page
function changeBgColor(color) {
  document.body.style.backgroundColor = color;
}

// fonction pour modifier la couleur du texte de la page
function changeTextColor(color) {
  document.body.style.color = color;
}

// fonction pour animer une image en la faisant grossir quand on passe la souris dessus et retrecir quand on la quitte
function animateImage(element) {
  // on fait une transition pour que l'animation soit plus douce
  element.style.transition = "transform 0.5s ease"; // Ensure smooth transition

  // on agrandit l'image quand on passe la souris dessus
  element.addEventListener('mouseover', function () {
    this.style.transform = "scale(1.2)"; // Grow the element by 20%
  });

    // on rétrécit l'image quand on quitte l'image
  element.addEventListener('mouseout', function () {
    this.style.transform = "scale(1)"; // Return to original size
  });
}

// exportation des fonctions
export { changeBgColor, changeTextColor, animateImage };