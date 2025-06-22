const exploreBtn = document.querySelector(".display-button");
const homeNavSteps = document.querySelectorAll(".nav-step");
const navHome = document.querySelector(".home-page-link");

exploreBtn.addEventListener("click", () => {
  window.location.href = "../destination.html";
});

function changeSelectedLinkState() {
  homeNavSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navHome.classList.add("selected-nav-link");
}

changeSelectedLinkState();
