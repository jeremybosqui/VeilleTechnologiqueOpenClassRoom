
let scrollToTopBtn = document.querySelector(".scrollToTopBtn")
let rootElement = document.documentElement

function handleScroll() {
  // dire à la fonction ce qu'il faut faire quand on scroll sur l'écran à savoir afficher le bouton à partir d'un certain scroll sur la page et le faire de disparaitre à partir d'un certain scroll également avec else 
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.10) {
    // montrer le bouton 
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // cacher le bouton 
    scrollToTopBtn.classList.remove("showBtn")
  }
}
function scrollToTop() {
  // Scroll jusqu'en haut de la page avec un comportement smooth pour que le scroll ne soit pas brutal
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

