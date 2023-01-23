import { displayData } from "../pages/photographer.js";

function sortList(currentPhotographer, currentMedias) {
    const sortSection = document.querySelector(".sort-section")
    const sortList = document.createElement("div");
    const sortContent = document.createElement("div");
    sortList.classList.add("sort-list");
    sortContent.classList.add("sort-content");
    sortContent.innerHTML = `<label id="listboxlabel" role="label" for="selected" name="Order by">Trier par</label>`;
    sortList.innerHTML = 
       `<button class="selected" id="selected" aria_labelledby="listboxlabel" aria-haspopup="listbox" aria-label="Populaire">Populaire<i class="fas fa-chevron-down"></i></button>
       <div class="options hidden">  
           <button class="optDate" role="option" aria-label="Date">Date</button>
           <button class="optTitle" role="option" aria-label="Titre">Titre</button>
       </div>`;
    sortContent.appendChild(sortList);
    sortSection.appendChild(sortContent);
    const selectElement = document.querySelector(".selected");
    selectElement.setAttribute("aria-expanded", false);
    const options = document.querySelector(".options");
    const optDate = document.querySelector(".optDate");
    const optTitle = document.querySelector(".optTitle");
    const optPopular = document.querySelector(".optPopular");  
    
    selectElement.addEventListener("click", () => {
        document.querySelector(".fa-chevron-down").classList.toggle("chevron-up");
        let ariaExpanded = selectElement.getAttribute("aria-expanded");
        ariaExpanded == "true" ? ariaExpanded = "false" : ariaExpanded = "true";
        selectElement.setAttribute("aria-expanded", ariaExpanded);
        options.classList.toggle("hidden");
    });
    if (optDate) {
        optDate.addEventListener("click", () => {
            currentMedias = currentMedias.sort((a, b) => (b.date.localeCompare(a.date)));
            refreshSortList(currentMedias, currentPhotographer, "date");
            optionSortList("date");
        });
    }
    if (optTitle) {
        optTitle.addEventListener("click", () => {
            currentMedias = currentMedias.sort((a, b) => (a.title.localeCompare(b.title)));
            refreshSortList(currentMedias, currentPhotographer, "title");
            optionSortList("title");
        });
    }
    if (optPopular) {
        optPopular.addEventListener("click", () => {
            currentMedias = currentMedias.sort((a, b) => (b.likes - a.likes));
            refreshSortList(currentMedias, currentPhotographer, "popular");
            optionSortList("popular");
        });
    }
}

function optionSortList(opt){
    const divSortList = document.querySelector(".sort-list");
    divSortList.innerHTML = " ";
    if (opt === "popular") {
        divSortList.innerHTML = 
       `<button class="selected" id="selected" aria_labelledby="listboxlabel" aria-haspopup="listbox" aria-label="Populaire" >Populaire<i class="fas fa-chevron-down"></i></button>
       <div class="options hidden">  
           <button class="optDate" role="option" aria-label="Date">Date</button>
           <button class="optTitle" role="option" aria-label="Titre">Titre</button>
       </div>`;
    } else if (opt === "date") {
        divSortList.innerHTML = 
       `<button class="selected" id="selected" aria_labelledby="listboxlabel" aria-haspopup="listbox" aria-label="Date">Date<i class="fas fa-chevron-down"></i></button>
       <div class="options hidden">  
           <button class="optPopular" role="option" aria-label="Populaire">Populaire</button>
           <button class="optTitle" role="option" aria-label="Titre">Titre</button>
       </div>`;
    } else if (opt === "title") {
        divSortList.innerHTML = 
     `<button class="selected" id="selected" aria_labelledby="listboxlabel" aria-haspopup="listbox" aria-label="Titre">Titre<i class="fas fa-chevron-down"></i></button>
       <div class="options hidden">  
           <button class="optPopular" role="option" aria-label="Populaire">Populaire</button>
           <button class="optDate" role="option" aria-label="Date">Date</button>
       </div>`;
    }
}

function refreshSortList(currentMedias, currentPhotographer) {
    document.querySelector(".media-content").innerHTML = " ";
    displayData(currentPhotographer, currentMedias);
    Lightbox.init();
}

export {sortList};