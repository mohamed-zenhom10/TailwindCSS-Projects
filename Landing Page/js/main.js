const menuBtn = document.getElementById("toggle-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  menu.classList.toggle("hidden");
}