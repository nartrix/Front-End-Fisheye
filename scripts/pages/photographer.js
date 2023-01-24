import {
  photographerFactory,
  getPhotographerInfos,
  likesCard,
} from "../factories/photographer.js";
import {
  mediaFactory,
  getPhotographerMedia,
} from "../factories/media_factory.js";
import { sortList } from "../utils/sort.js";

// Mettre le code JavaScript lié à la page photographer.html.
const photographerUrl = window.location.search;
const urlParams = new URLSearchParams(photographerUrl);
const photographerId = urlParams.get("id");

// Appel fichier JSON
async function getPhotographers() {
  return fetch("./data/photographers.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => data)
    .catch((err) => {
      alert(`Erreur : ${err}`);
    });
}

async function displayData(photographers, media) {
  // Récupération des données du photographe selon son id
  const photographerModel = photographerFactory(photographers);
  getPhotographerInfos(photographerModel);
  // Filtrer les medias afin de récupérer les medias selon le photographerId
  const photographMedia = document.querySelector(".media-content");
  // Affichage des données
  media.forEach((currentMedia) => {
    const mediaModel = mediaFactory(currentMedia, photographers);
    const mediaCard = getPhotographerMedia(mediaModel);
    photographMedia.appendChild(mediaCard);
  });

}

async function likesClick() {
  const likeBtn = document.querySelectorAll(".likes button");
  const totalLikes = document.querySelector(".likes-count");
  
  likeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
          const likeNumber = btn.parentNode.firstChild;

          if (btn.firstChild.classList.contains("fa-regular")) {
              btn.firstChild.classList.replace("fa-regular", "fa-solid");
              likeNumber.textContent = (parseInt(likeNumber.textContent) + 1);
              totalLikes.textContent = (parseInt(totalLikes.textContent) + 1);
              
          } else if (btn.firstChild.classList.contains("fa-solid")){
              btn.firstChild.classList.replace("fa-solid", "fa-regular");
              likeNumber.textContent = (parseInt(likeNumber.textContent) - 1);
              totalLikes.textContent = (parseInt(totalLikes.textContent) - 1);
          }
      });
  });
}


async function init() {
  // Récupération des données de photogrpahers et media
  const { photographers, media } = await getPhotographers();
  const currentPhotographer = photographers.find(
    (id) => id.id === parseInt(photographerId, 10)
  )
  const currentMedias = media.filter(
    (dataMedia) => dataMedia.photographerId === parseInt(photographerId, 10)
  );
  const sortCurrentMedias = currentMedias.sort((a, b) => (b.likes - a.likes));

  displayData(currentPhotographer, sortCurrentMedias);
  likesCard(currentPhotographer, currentMedias);
  Lightbox.init();
  likesClick();
  sortList(currentPhotographer, sortCurrentMedias);
}

init();

export {displayData, likesClick};