import { photographerFactory, getPhotographerInfos } from "../factories/photographer.js";
import { mediaFactory, getPhotographerMedia} from "../factories/media_factory.js";

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
            alert(`Erreur : ${  err}`);
        });
}

async function displayData(photographers, media) {
    // Récupération des données du photographe selon son id
    const currentPhotographer = photographers.find(id => id.id === parseInt(photographerId, 10));
    console.log(currentPhotographer);
    const photographerModel = photographerFactory(currentPhotographer);
    getPhotographerInfos(photographerModel);

    // Filtrer les medias afin de récupérer les medias selon le photographerId
    const currentMedias = media.filter(dataMedia => dataMedia.photographerId === parseInt(photographerId, 10));
    const photographMedia = document.querySelector(".media-content");

    // Affichage des données
    currentMedias.forEach(currentMedia => {
        const mediaModel = mediaFactory(currentMedia, currentPhotographer);
        const mediaCard = getPhotographerMedia(mediaModel);
        photographMedia.appendChild(mediaCard);
    });
}

async function init() {
    // Récupération des données de photogrpahers et media
    const { photographers, media } = await getPhotographers();
    displayData(photographers, media);
}

init();