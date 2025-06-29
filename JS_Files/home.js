const exploreBtn = document.querySelector(".display-button");
const homeNavSteps = document.querySelectorAll(".nav-step");
const navHome = document.querySelector(".home-page-link");
const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.protocol === "file:";
const basePath = isLocal ? "" : "/Space-tourism-multi-page-website";

exploreBtn.addEventListener("click", () => {
  window.location.href = `${basePath}/destination.html`;
});

function changeSelectedLinkState() {
  homeNavSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navHome.classList.add("selected-nav-link");
}

changeSelectedLinkState();
