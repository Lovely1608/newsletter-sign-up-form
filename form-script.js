//Newselleter-sign-up-form with a success message

const email = document.querySelector(".userEmail");
const submitBtn = document.querySelector(".submit");
const dismiss = document.querySelector(".dismissBtn");

let isEmailValid = false;

email.oninput = () => {
  const msg = document.querySelector(".errorMessage");

  //Basic sanity check
  if (typeof email.value !== "string" || email.value.length > 254) return false;

  //simple and practicle regex for email practicle
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  //general syntax test
  if (!regex.test(email.value)) {
    email.style.border = "solid 1px red";

    msg.innerText = "Valid email required";

    msg.style.color = "red";

    return;
  }

  //split , and check local + domain lengths
  const [local, domain] = email.value.split("@");

  if (local.length > 64 || domain.length > 253) {
    email.style.border = "solid 1px red";

    msg.innerText = "Valid email required check your email length";

    msg.style.color = "red";
    isEmailValid = false;
  } else {
    submitBtn.classList.add("successBtn");

    email.style.border = "1px solid green ";

    msg.innerText = "Looks good!";
    msg.style.color = "green";
    email.classList.add("emailInput");
    isEmailValid = true;
  }
};

submitBtn.onclick = (e) => {
  e.preventDefault(); //stop form from submission

  const form = document.querySelector(".container");
  const success = document.querySelector(".message-component");

  if (isEmailValid) {
    form.style.display = "none";

    success.style.display = "block";
  }
};

dismiss.onclick = () => {
  const success = document.querySelector(".message-component");
  const form = document.querySelector(".container");
  if ((success.style.display === "block")) {
    form.style.display = "block";
    success.style.display = "none";

    window.location.reload(); //refresh the page
  }
};
