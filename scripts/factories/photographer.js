function photographerFactory(data) {
  // Récupération des valeurs
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  return { name, id, city, country, tagline, price, picture};
}

function getUserCardDOM(data) {
  const article = document.createElement("article");

  article.innerHTML = `
    <a href="./photographer.html?id=${data.id}">
        <img src="${data.picture}" alt="${data.name}"> </img>
    </a>

    <h2>${data.name}</h2>

    <p class="location">${data.city}, ${data.country}</p>
    <p class="tagline">${data.tagline}</p>
    <p class="price">${data.price}€/par jour</p>
  `;
  return article;
}

function getPhotographerInfos(data) {
  const photographHeader = document.querySelector(".photograph-header");

  photographHeader.innerHTML = `
    <div class="photograph_infos"> 
      <h1>${data.name}</h1>
      <p class="location">${data.city}, ${data.country}</p>
      <p class="tagline">${data.tagline}</p>
    </div>

    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>

    <a href="./photographer.html?id=${data.id}">
        <img src="${data.picture}" alt="${data.name}"> </img>
    </a>      
  `;
  return photographHeader;
}

export { photographerFactory, getUserCardDOM, getPhotographerInfos};