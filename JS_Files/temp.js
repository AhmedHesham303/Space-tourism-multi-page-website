const websiteLogo = document.querySelector(".website-logo");
websiteLogo.addEventListener("click", () => {
  window.location.href = "../index.html";
});

function navigator() {
  navSteps.forEach((navStep) => {
    navStep.addEventListener("click", () => {
      if (navStep.textContent.includes("Home")) {
        window.location.href = "../index.html";
      }
      if (navStep.textContent.includes("Destination")) {
        window.location.href = "../destination.html";
      }
      if (navStep.textContent.includes("Crew")) {
        window.location.href = "../crew.html";
      }
    });
  });
}
navigator();
