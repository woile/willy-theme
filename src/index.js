console.log(`
Holis!
Welcome to my personal site!

`);

function load() {
  let checked = JSON.parse(localStorage.getItem("dark-mode"));
  document.getElementById("dark-mode").checked = checked;
}

function save(value) {
  let checkbox = document.getElementById("dark-mode");
  localStorage.setItem("dark-mode", value);
}

function start() {
  let checkbox = document.getElementById("dark-mode");
  console.log(checkbox);
  checkbox.onclick = () => {
    save(checkbox.checked)
  }
}

load();
start();

// - read localStorage
// - read screen color scheme
