import { photographerFactory, getPhotographerInfos } from "../factories/photographer.js";

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

async function displayData(photographers) {
    // Récupération des données du photographe selon son id
    const currentPhotographer = photographers.find(id => id.id === parseInt(photographerId, 10));
    console.log(currentPhotographer);
    const photographerModel = photographerFactory(currentPhotographer);
    getPhotographerInfos(photographerModel);
}

async function init() {
    // Récupération des données de photogrpahers et media
    const { photographers, media } = await getPhotographers(); 
    const mediasOfPhotographer = media.filter(dataMedia => dataMedia.photographerId === parseInt(photographerId, 10));
    console.log(mediasOfPhotographer);
    displayData(photographers);
}

init();