function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

// fermeture du modal par le biais de la touche esc
function keyboardAcces(e) {
  if (e.key === "Escape") {
    closeModal();
  }
}

document.addEventListener("keyup", keyboardAcces);

const form = document.getElementById("contact");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");

const firstNameMsg1 = "Vous devez entrer votre prénom.";
const firstNameMsg2 =
  "Le prénom doit comporter au minimum 2 caractères et uniquement des lettres";

const lastNameMsg1 = "vous devez entrer votre nom";
const lastNameMsg2 =
  "Le nom doit comporter au minimum 2 caractères et uniquement des lettres";

const emailMsg1 = "Vous devez entrer votre email."; // field not required for the moment
const emailMsg2 = "L'email n'est pas valide";

const messageMsg1 = "Vous devez entre un message";
const messageMsg2 =
  "Le message doit comporter au minimum 2 caractères et uniquement des lettres";

// Validation des input
function inputValidation(e, msg1, msg2) {
  if (e.value == "") {
    if (e.required == true) {
      e.parentElement.setAttribute("data-error-visible", "true");
      e.parentElement.setAttribute("data-error", msg1);
    } else {
      e.parentElement.removeAttribute("data-error-visible");
      e.parentElement.removeAttribute("data-error");
    }
  } else if (e.validity.valid !== true) {
    e.parentElement.setAttribute("data-error-visible", "true");
    e.parentElement.setAttribute("data-error", msg2);
  } else {
    e.parentElement.removeAttribute("data-error-visible");
    e.parentElement.removeAttribute("data-error");
  }
}

function textareaValidation(e, msg1, msg2) {
  if (message.value !== null) {
    e.parentElement.setAttribute("data-error-visible", "true");
    e.parentElement.setAttribute("data-error", msg1);
  }

  if (message.value.length >= 2) {
    e.parentElement.setAttribute("data-error-visible", "true");
    e.parentElement.setAttribute("data-error", msg2);
  }
}

// Nom validation
firstName.addEventListener("change", function () {
  inputValidation(firstName, firstNameMsg1, firstNameMsg2);
});

// Prénom validation
lastName.addEventListener("change", function () {
  inputValidation(lastName, lastNameMsg1, lastNameMsg2);
});

// Email validation
email.addEventListener("change", function () {
  inputValidation(email, emailMsg1, emailMsg2);
});

// Message validation
message.addEventListener("change", function () {
  inputValidation(message, messageMsg1, messageMsg2);
});

// form validation
function validate() {
  inputValidation(firstName, firstNameMsg1, firstNameMsg2);
  inputValidation(lastName, lastNameMsg1, lastNameMsg2);
  inputValidation(email, emailMsg1, emailMsg2);
  textareaValidation(message, messageMsg1, messageMsg2);

  console.log();
}

submitBtn.addEventListener("click", validate);
