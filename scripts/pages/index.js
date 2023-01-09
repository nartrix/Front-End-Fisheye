/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
// eslint-disable-next-line no-use-before-define
getPhotographers();

async function getPhotographers() {
  // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
  // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
  /* let photographers = [
        {
            "name": "Ma data test",
            "id": 1,
            "city": "Paris",
            "country": "France",
            "tagline": "Ceci est ma data test",
            "price": 400,
            "portrait": "account.png"
        },
        {
            "name": "Autre data test",
            "id": 2,
            "city": "Londres",
            "country": "UK",
            "tagline": "Ceci est ma data test 2",
            "price": 500,
            "portrait": "account.png"
        },
    ]
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers, ...photographers, ...photographers]}) 
    */

  const API_URL = "../../data/photographers.json"; // Récupération du fichier comportant les données

  await fetch(`${API_URL}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      const { photographers } = data; // récupération des données du tableau photographers
      console.log(photographers);
      // eslint-disable-next-line no-use-before-define
      displayData(photographers); // affichage des données
    })
    .catch(() => {
      // retour erreur
    });
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  await photographers.forEach((photographer) => {
    console.log(photographer);
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}
