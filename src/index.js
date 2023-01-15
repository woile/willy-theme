console.log(`
Holis!
Welcome to my personal site!

My social networks:

- https://hachyderm.io/@woile
- https://twitter.com/santiwilly

`);

// If user does nothing -> control with prefers color scheme
// Is user clicks, it's store and used
const THEME_VAR = "color-scheme";
const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const CHECKBOX_ID = "dark-mode";
const isThemeSet = () => (localStorage.getItem(THEME_VAR) ? true : false);
const isDarkTheme = () =>
  localStorage.getItem(THEME_VAR) === DARK_THEME ? true : false;

function getPreferredColorScheme() {
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return DARK_THEME;
    } else {
      return LIGHT_THEME;
    }
  }
  return LIGHT_THEME;
}

function load() {
  const checkbox = document.getElementById(CHECKBOX_ID);
  // If the theme has been stored in localstorage
  if (isThemeSet()) {
    checkbox.checked = isDarkTheme();
    return;
  }
  // Otherwise, we read from preference
  const getDefault = getPreferredColorScheme();
  checkbox.checked = getDefault == DARK_THEME;
}

function save(value) {
  localStorage.setItem(THEME_VAR, value);
}

function start() {
  // Add save listener when user clicks checkbox
  let checkbox = document.getElementById(CHECKBOX_ID);
  checkbox.onclick = () => {
    const colorScheme = checkbox.checked == true ? DARK_THEME : LIGHT_THEME;
    save(colorScheme);
  };

  // Add listener to system theme preference, as long as theme is not saved
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (isThemeSet()) {
        return;
      }
      const newColorScheme = event.matches ? DARK_THEME : LIGHT_THEME;
      document.getElementById(CHECKBOX_ID).checked =
        newColorScheme == DARK_THEME;
    });
}

load();
start();

// - read localStorage
// - read screen color scheme
