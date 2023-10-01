// Get the project subheader
const projectHeader = document.getElementById("project_header");

// Get the offset position of the project subheader
const sticky = projectHeader.offsetTop;

// Add the sticky class to the projectHeader when you reach its scroll position. 
// Remove the sticky class when you leave the scroll position.
function stickyHeader() {
  if (window.pageYOffset  >= sticky + 10) {
    projectHeader.classList.remove("fixed");
    projectHeader.classList.add("sticky");
  } else {
    projectHeader.classList.remove("sticky");
    projectHeader.classList.add("fixed")
  }
}