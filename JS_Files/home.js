document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.querySelector(".display-button");
  const homeNavSteps = document.querySelectorAll(".nav-step");
  const navHome = document.querySelector(".home-page-link");

  exploreBtn.addEventListener("click", () => {
    console.log(basePath);
    window.location.href = `${basePath}/destination.html`;
  });

  function changeSelectedLinkState() {
    homeNavSteps.forEach((navStep) => {
      navStep.classList.remove("selected-nav-link");
    });
    if (navHome) {
      navHome.classList.add("selected-nav-link");
    }
  }

  changeSelectedLinkState();
});
