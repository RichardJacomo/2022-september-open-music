const button = document.querySelector(".dark-mode-button");
const all = document.querySelectorAll('.all');
const body = document.body;

const theme = "dark-mode";

let darkMode;

button.addEventListener("click", themeChange);

function themeChange() {
  darkMode = !darkMode;
  body.classList.toggle(theme);
  //   all.forEach((element, index) => {
  //     all[index].classList.toggle(theme);
  // });

  localStorage.setItem(theme, darkMode);
  themeChangeButtonText(button);
}
const themeButtonText = ["Trocar Para: Light Mode", "Trocar Para: Dark Mode"];

function themeChangeButtonText(ButtonElement) {
    darkMode
      // ? (ButtonElement.innerHTML = '<img class="img-product" src="./assets/img/moon.png" alt=""></img>')
      // : (ButtonElement.innerHTML = '<img class="img-product" src="./assets/img/sun.png" alt=""></img>');
      ? (ButtonElement.innerHTML = '<img class="img-product" src="./assets/img/sun.png" alt=""></img>')
      : (ButtonElement.innerHTML = '<img class="img-product" src="./assets/img/moon.png" alt=""></img>');
      
  }

function themePreferenceAnalysis() {
    darkMode = JSON.parse(localStorage.getItem(theme));
   
    if (darkMode) {
      themeChangeButtonText(button);
      body.classList.add(theme);
      // all.classList.add(theme)
    } else {
      themeChangeButtonText(button);
    }
    
  }
themePreferenceAnalysis();
