const exploreBtn = document.querySelector(".display-button");
const navSteps = document.querySelectorAll(".nav-step");
const navHome = document.querySelector(".home-page-link");

exploreBtn.addEventListener("click", () => {
  window.location.href = "../destination-moon.html";
});

function changeSelectedLinkState() {
  navSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navHome.classList.add("selected-nav-link");
}

changeSelectedLinkState();
