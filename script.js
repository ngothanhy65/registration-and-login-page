const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const container = document.getElementById("container");
registerBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});
loginBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
