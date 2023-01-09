/* eslint-disable prettier/prettier */
// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  // Récupération des valeurs
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    /* const article = document.createElement( "article" );

        const a = document.createElement( 'a' );
        a.setAttribute('href', id)
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const p1 = document.createElement( 'p' );
        const p2 = document.createElement( 'p' );
        const p3 = document.createElement( 'p' );
        p1.textContent = city + ', ' + country;
        p2.textContent = tagline;
        p3.innerHTML = price;

        a.appendChild(img);
        article.appendChild(a);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        return article; */

    const article = document.createElement("article");

    article.innerHTML = `
            <a href="">
                <img src="${picture}" alt="${name}"> </img>
            </a>

            <h2>${name}</h2>

            <p class="location">${city}, ${country}</p>
            <p class="tagline">${tagline}</p>
            <p class="price">${price}€/par jour</p>
        `;
    return article;
  }
  return { name, id, city, country, tagline, price, picture, getUserCardDOM };
}
