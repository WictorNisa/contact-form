const submitButton = document.getElementById("submit-button");
const firstNameInput = document.querySelector("#fname");
const lastNameInput = document.querySelector("#lname");
const emailField = document.getElementById("email");
// const errorText = document.querySelector(".error-text");
const fnameError = document.querySelector(".fname-error");
const lnameError = document.querySelector(".lname-error");
const emailError = document.querySelector(".email-error");
const radioError = document.querySelector(".radio-error");
const form = document.querySelector("#contact-form");
const radioButtons = document.querySelectorAll("input[name=type]");
const textArea = document.getElementById("message");
const textareaError = document.querySelector(".textarea-error");
const checkbox = document.getElementById("check");
const checkboxError = document.querySelector(".checkbox-error");
const modal = document.querySelector(".modal")

const validateEmail = (email) => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

const validateRadio = () => {
  let isSelected = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isSelected = true;
      break;
    }
  }

  if (isSelected) {
    radioError.textContent = "";
    radioError.classList.remove("error-text");
    return true;
  } else {
    radioError.textContent = "Please select a query type";
    radioError.classList.add("error-text");
    return false;
  }
};

const validateTextarea = () => {
  let textareaInput = textArea.value;
  if (textareaInput === "") {
    textareaError.textContent = "This field is required";
    textareaError.classList.add("error-text");
    textArea.classList.add("invalid");
    return false;
  } else {
    textareaError.textContent = "";
    textareaError.classList.remove("error-text");
    textArea.classList.add("valid");
    return true;
  }
};

const validateCheckbox = () => {
  if (checkbox.checked) {
    checkboxError.textContent = "";
    checkboxError.classList.remove("error-text");
    return true;
  } else {
    checkboxError.textContent =
      "To submit this form, please consent to being contacted";
    checkboxError.classList.add("error-text");
    return false;
  }
};

const validateName = () => {
  const firstNameValue = firstNameInput.value;
  const lastNameValue = lastNameInput.value;
  isValid = true;

  if (firstNameValue === "") {
    fnameError.textContent = "This field is required";
    fnameError.classList.add("error-text");
    firstNameInput.classList.add("invalid");
    isValid = false;
  } else {
    fnameError.textContent = "";
    firstNameInput.classList.add("valid");
    fnameError.classList.remove("error-text");
  }

  if (lastNameValue === "") {
    lnameError.textContent = "This field is required";
    lnameError.classList.add("error-text");
    lastNameInput.classList.add("invalid");
    isValid = false;
  } else {
    lnameError.textContent = "";
    lastNameInput.classList.add("valid");
    lnameError.classList.remove("error-text");
  }
  return isValid;
};

const validateMail = () => {
  const emailValue = emailField.value;
  if (emailValue && validateEmail(emailValue)) {
    emailError.textContent = "";
    emailError.classList.remove("error-text");
    emailField.classList.add("valid");
    return true;
  } else {
    emailError.textContent = "This field is required";
    emailError.classList.add("error-text");
    emailField.classList.add("invalid");
    return false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission if validation fails
  validateForm();
});

const validateForm = () => {
  let isFormValid = true;

  if (!validateName()) isFormValid = false;
  if (!validateMail()) isFormValid = false;
  if (!validateRadio()) isFormValid = false;
  if (!validateTextarea()) isFormValid = false;
  if (!validateCheckbox()) isFormValid = false;

  // If all validations are true
  if (isFormValid) {
    modal.style.display = 'flex'
    firstNameInput.textContent = '';
  }

  return isFormValid; // Prevents form submission if validation fails
};
