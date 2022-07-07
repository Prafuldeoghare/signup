const form = document.getElementById("form");

const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const fnameMsg = document.getElementById("fnameMsg");
const lnameMsg = document.getElementById("lnameMsg");
const emailMsg = document.getElementById("emailMsg");
const passwordMsg = document.getElementById("passwordMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fname = document.getElementById("firstname");
  const lname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  showFirstNameError(fname);
  showLastNameError(lname);
  showEmailError(email);
  showPasswordError(password);
});

function showFirstNameError(fname) {
  if (!fname.value) {
    fname.style.border = "2px solid hsl(0, 100%, 74%)";
    fnameError.style.visibility = "visible";
    fnameMsg.style.display = "block";
    fname.placeholder = "";
  } else {
    fname.style.border = "2px solid hsl(249, 10%, 26%)";
    fnameError.style.visibility = "hidden";
    fnameMsg.style.display = "none";
    fname.placeholder = "First Name";
  }
}

function showLastNameError(lname) {
  if (!lname.value) {
    lname.style.border = "2px solid hsl(0, 100%, 74%)";
    lname.placeholder = "";
    lnameError.style.visibility = "visible";
    lnameMsg.style.display = "block";
  } else {
    lname.style.border = "2px solid hsl(249, 10%, 26%)";
    lnameError.style.visibility = "hidden";
    lnameMsg.style.display = "none";
    lname.placeholder = "Last Name";
  }
}

function showEmailError(email) {
  if (!email.value) {
    email.style.border = "2px solid hsl(0, 100%, 74%)";
    email.placeholder = "email@example/com";
    email.style.setProperty("--c", "hsl(0, 100%, 74%)");
    emailError.style.visibility = "visible";
    emailMsg.style.display = "block";
  } else {
    email.style.border = "2px solid hsl(249, 10%, 26%)";
    emailError.style.visibility = "hidden";
    emailMsg.style.display = "none";
    email.placeholder = "Email Address";
    email.style.setProperty("--c", "hsl(249, 10%, 26%)");
  }
}

function showPasswordError(pass) {
  if (!pass.value) {
    pass.style.border = "2px solid hsl(0, 100%, 74%)";
    pass.placeholder = "";
    passwordError.style.visibility = "visible";
    passwordMsg.style.display = "block";
  } else {
    pass.style.border = "2px solid hsl(249, 10%, 26%)";
    passwordError.style.visibility = "hidden";
    passwordMsg.style.display = "none";
    pass.placeholder = "Password";
  }
}
