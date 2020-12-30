// VARIABLES
const sendEmailForm = document.getElementById("email-form"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  message = document.getElementById("message"),
  sendBtn = document.getElementById("sendBtn"),
  resetBtn = document.getElementById("resetBtn");

// EVENT LISTENERS
eventListeners();

function eventListeners() {
  // PAGE LOAD
  document.addEventListener("DOMContentLoaded", appInit);

  // VALIDATE THE FORM
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);

  resetBtn.addEventListener("click", resetForm);
  sendEmailForm.addEventListener("submit", sendEmail);
}

// FUNCTIONS
function appInit() {
  sendBtn.disabled = true;
}

function sendEmail() {
  const spinner = document.querySelector("#spinner");
  spinner.style.display = 'block';

  const sendEmailImg = document.createElement('img');
  sendEmailImg.src = 'img/mail.gif';
  sendEmailImg.style.display = 'block';

  setTimeout(function(){
    spinner.style.display = 'none';
    document.querySelector('#loaders').appendChild(sendEmailImg);
    setTimeout(function(){
      sendEmailForm.reset();
      sendEmailImg.remove();
    }, 5000);
  }, 3000);

  sendBtn.disabled = true;
}

function validateField() {
  let errors;

  // VALIDATES THE LENGTH OF THE FIELD VALUE
  validateLength(this);

  if (this.type === "email") {
    validateEmail(this);
  }

  errors = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (errors.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

// VALIDATE LENGTH IN THE FIELD
function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// VALIDATE EMAIL IN THE FIELD
function validateEmail(field) {
  let emailText = field.value;

  if (emailText.indexOf("@") !== -1) {
    field.style.borderBottomColor = "green";
  } else {
    field.style.borderBottomColor = "red";
  }
}

// RESET THE FORM BUTTON
function resetForm() {
  sendEmailForm.reset();
  sendBtn.disabled = true;
}