function toggleNewDiv() {
  const container = document.getElementById(`Men-container`);
  const existingDiv = container.querySelector(".Women_O");

  if (existingDiv) {
    container.removeChild(existingDiv);
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("Women_O");
    const newContent = document.createTextNode(
      `Men - New content added dynamically!`
    );
    container.appendChild(newDiv);
  }
}
function toggleNewDiv2(category) {
  const container = document.getElementById(`${category}-container`);
  const existingDiv = container.querySelector(".new-div");

  if (existingDiv) {
    container.removeChild(existingDiv);
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    const newContent = document.createTextNode(
      `${category} - New content added dynamically!`
    );
    container.appendChild(newDiv);
  }
}
function toggleNewDiv3(category) {
  const container = document.getElementById(`${category}-container`);
  const existingDiv = container.querySelector(".new-div");

  if (existingDiv) {
    container.removeChild(existingDiv);
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    const newContent = document.createTextNode(
      `${category} - New content added dynamically!`
    );
    container.appendChild(newDiv);
  }
}
function toggleNewDiv4(category) {
  const container = document.getElementById(`${category}-container`);
  const existingDiv = container.querySelector(".new-div");

  if (existingDiv) {
    container.removeChild(existingDiv);
  } else {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-div");
    const newContent = document.createTextNode(
      `${category} - New content added dynamically!`
    );
    container.appendChild(newDiv);
  }
}

const bx_login = document.querySelector(".bx_login");
const login = document.querySelector("#login");
const x_login = document.querySelector("#x_login");
const x_register = document.querySelector("#x_register");
const re = document.querySelector("#re");
const from_login = document.querySelector(".from_login");
const reg = document.querySelector(".reg");
const register = document.querySelector(".register");
const bx_register = document.querySelector(".bx_register");
login.addEventListener("click", function () {
  bx_login.style.visibility = "visible";
  from_login.style.visibility = "visible";
});
x_login.addEventListener("click", function () {
  bx_login.style.visibility = "hidden";
  from_login.style.visibility = "hidden";
});
re.addEventListener("click", function () {
  bx_register.style.visibility = "visible";
  bx_login.style.visibility = "visible";
  from_login.style.visibility = "visible";
});

x_register.addEventListener("click", function () {
  bx_register.style.visibility = "hidden";
});
const buttons = document.querySelectorAll(".category-button");
const radios = document.querySelectorAll('input[type="radio"]');
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    const radio = this.previousElementSibling.querySelector(
      'input[type="radio"]'
    );
    radios.forEach((radioBtn) => {
      radioBtn.checked = false;
    });
    radio.checked = true;
    console.log("Selected category:", category);
  });
});
