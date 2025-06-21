const exploreBtn = document.querySelector(".display-button");
const navSteps = document.querySelectorAll(".nav-step");
const navHome = document.querySelector(".home-page-link");

function changeSelectedLinkState() {
  navSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navHome.classList.add("selected-nav-link");
}

function handelChangingPage() {
  navSteps.forEach((navStep) => {
    navStep.addEventListener("click", () => {
      if (navStep.textContent.includes("Destination")) {
        window.location.href = "../destination-moon.html";
      }
    });
  });
}
handelChangingPage();
changeSelectedLinkState();
