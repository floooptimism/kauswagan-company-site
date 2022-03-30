// When the user scrolls the page, execute myFunction
window.onscroll = stickyBar;


var navbar = document.getElementById("stickybar");
var offset = navbar.offsetTop;

function stickyBar() {
  if (window.pageYOffset >= offset) {
    navbar.classList.add("fixed-top")
  } else {
    navbar.classList.remove("fixed-top");
  }
}