const navSteps = document.querySelectorAll(".nav-step");
const websiteLogo = document.querySelector(".website-logo");

// Detect if running locally (file:// or localhost)
const isLocal =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.protocol === "file:";
const basePath = isLocal ? "" : "/Space-tourism-multi-page-website";
// Logo click → go to home
websiteLogo.addEventListener("click", () => {
  window.location.href = `${basePath}/index.html`;
});

function navigator() {
  navSteps.forEach((navStep) => {
    navStep.addEventListener("click", () => {
      const text = navStep.textContent.toLowerCase();

      if (text.includes("home")) {
        window.location.href = `${basePath}/index.html`;
      } else if (text.includes("destination")) {
        window.location.href = `${basePath}/destination.html`;
      } else if (text.includes("crew")) {
        window.location.href = `${basePath}/crew.html`;
      } else if (text.includes("technology")) {
        window.location.href = `${basePath}/technology.html`;
      }
    });
  });
}
navigator();
