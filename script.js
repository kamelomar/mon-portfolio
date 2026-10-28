
const bouton = document.querySelector("#retour-haut");

bouton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
