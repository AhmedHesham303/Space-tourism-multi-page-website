function navigator() {
  navSteps.forEach((navStep) => {
    navStep.addEventListener("click", () => {
      if (navStep.textContent.includes("Home")) {
        window.location.href = "../index.html";
      }
      if (navStep.textContent.includes("Destination")) {
        window.location.href = "../destination.html";
      }
    });
  });
}
navigator();
