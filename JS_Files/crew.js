const navSteps = document.querySelectorAll(".nav-step");
const navCrew = document.querySelector(".crew-page-link");
function changeSelectedLinkState() {
  navSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navCrew.classList.add("selected-nav-link");
}

changeSelectedLinkState();
