function mediaFactory(mediaData, photographerData) {
  // Récupération des valeurs de media
  const { title, image, video, likes } = mediaData;

  const name = photographerData.name;
  const namePhotographer = name.split(" ");
  const pathName = namePhotographer[0].replace("_", " ");
  const media = `assets/media/${pathName}/${image ? image : video}`;

  return { title, likes, media, name, image };
}

function getPhotographerMedia(currentMedia) {
  const mediaContent = document.createElement("div");
  const figure = document.createElement("figure");
  const figcaption = document.createElement("figcaption");
  const p = document.createElement("p");
  const media = document.createElement(currentMedia.image ? "img" : "video");
  const divLikes = document.createElement("div");
  const likesNb = document.createElement("span");
  const btnLike = document.createElement("button");
  const heart = document.createElement("i");

  //Set attributes and class for the CSS
  mediaContent.classList.add("media-card");
  media.setAttribute("src", currentMedia.media);
  media.setAttribute("alt", currentMedia.title);
  media.setAttribute("tabindex", "0");  
  divLikes.classList.add("likes");
  heart.classList.add("fa-regular", "fa-heart");
  heart.setAttribute("aria-label", "likes");

  //Text injected in HTML elements
  p.textContent = `${currentMedia.title}`;
  likesNb.textContent = `${currentMedia.likes}`;

  //Add created elements in the DOM
  figure.appendChild(media);
  figure.appendChild(figcaption);
  figcaption.appendChild(p);
  figcaption.appendChild(divLikes);
  btnLike.appendChild(heart);
  divLikes.appendChild(likesNb);
  divLikes.appendChild(btnLike);
  mediaContent.appendChild(figure);

  return mediaContent;
}

export { mediaFactory, getPhotographerMedia };
