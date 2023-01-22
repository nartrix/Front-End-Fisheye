import {
  photographerFactory,
  getUserCardDOM,
} from "../factories/photographer.js";

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

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  // Récupération de chaques données contenu dans photgraphers
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = getUserCardDOM(photographerModel);
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupération des données de photogrpahers
  const responsePhotographers = await getPhotographers();
  console.log(responsePhotographers.photographers);
  displayData(responsePhotographers.photographers);
}

init();
