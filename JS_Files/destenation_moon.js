const navSteps = document.querySelectorAll(".nav-step");
const navDestenation = document.querySelector(".destination-page-link");

function changeSelectedLinkState() {
  navSteps.forEach((navStep) => {
    if (navStep.classList.contains("selected-nav-link")) {
      navStep.classList.remove("selected-nav-link");
    }
  });
  navDestenation.classList.add("selected-nav-link");
}

changeSelectedLinkState();
