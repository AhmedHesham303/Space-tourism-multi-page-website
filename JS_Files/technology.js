const technologyNavSteps = document.querySelectorAll(".nav-step");
const technologyPageLink = document.querySelector(".technology-page-link");
const technologySteps = document.querySelectorAll(".technology-step");
function changeSelectedLinkState() {
  technologyNavSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  technologyPageLink.classList.add("selected-nav-link");
}

function handelTechChoice() {
  technologySteps.forEach((choice, index) => {
    choice.addEventListener("click", () => {
      loadData(index);
    });
  });
}

async function loadData(technologyNum) {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    displayCrewMemberInfo(data.technology[technologyNum]);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayCrewMemberInfo(technology) {
  document.querySelector(".technology-name").textContent = technology.name;
  document.querySelector(".technology-img").src = technology.images.portrait;
  document.querySelector(".technology-description").textContent =
    technology.description;
}

handelTechChoice();
changeSelectedLinkState();
