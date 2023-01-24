import { displayData, likesClick } from "../pages/photographer.js";

function sortList(currentPhotographer, currentMedias) {
  const sortSection = document.querySelector(".sort-section");
  const sortList = document.createElement("div");
  const sortContent = document.createElement("div");
  sortList.classList.add("sort-list");
  sortContent.classList.add("sort-content");
  sortContent.innerHTML = `<label id="listboxlabel" role="label" for="selected" name="Order by">Trier par</label>`;
  sortList.innerHTML = `<div class="options">
            <button class="optPopular" id="selected" aria_labelledby="listboxlabel" aria-label="Populaire">Populaire<i class="fas fa-chevron-down"></i></button>  
           <button class="optDate hidden" role="option" aria-label="Date">Date</button>
           <button class="optTitle hidden" role="option" aria-label="Titre">Titre</button>
       </div>`;
  sortContent.appendChild(sortList);
  sortSection.appendChild(sortContent);

  const options = document.querySelector(".options");
  options.setAttribute("aria-expanded", false);
  const selectElement = options.firstElementChild;
  const optDate = document.querySelector(".optDate");
  const optTitle = document.querySelector(".optTitle");
  const optPopular = document.querySelector(".optPopular");
 
  selectElement.addEventListener("click", () => {
    selectElement
      .querySelector(".fa-chevron-down")
      .classList.toggle("chevron-up");
    options.querySelector(".optDate").classList.toggle("hidden");
    options.querySelector(".optTitle").classList.toggle("hidden");
  });

  optDate.addEventListener("click", () => {
    currentMedias = currentMedias.sort((a, b) => 
    b.date.localeCompare(a.date)); // trie par date
    refreshSortList(currentMedias, currentPhotographer, "date");
  });

  optTitle.addEventListener("click", () => {
    currentMedias = currentMedias.sort((a, b) =>
      a.title.localeCompare(b.title)); // trie par titre
    refreshSortList(currentMedias, currentPhotographer, "title");
  });

  optPopular.addEventListener("click", () => {
    currentMedias = currentMedias.sort((a, b) => b.likes - a.likes); // trie par likes
    refreshSortList(currentMedias, currentPhotographer, "popular");
  });
}

function refreshSortList(currentMedias, currentPhotographer) {
  document.querySelector(".media-content").innerHTML = " ";
  displayData(currentPhotographer, currentMedias);
  Lightbox.init();
  likesClick();
}

export { sortList };
