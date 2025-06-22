const technologySteps = document.querySelectorAll(".nav-step");
const navTechnology = document.querySelector(".technology-page-link");

function changeSelectedLinkState() {
  technologySteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navTechnology.classList.add("selected-nav-link");
}

function handelTechChoice() {
  navSteps.forEach((choice, index) => {
    choice.addEventListener("click", () => {
      loadData(index);
    });
  });
}

// async function loadData(technologyNum) {
//   try {
//     const response = await fetch("./data.json");
//     const data = await response.json();
//     displayCrewMemberInfo(data.technology[technologyNum]);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// function displayCrewMemberInfo(technology) {
//   document.querySelector(".technology-name").textContent = technology.name;
//   document.querySelector(".technology-img").src = technology.images.portrait;
//   document.querySelector(".technology-description").textContent =
//     technology.description;
// }

// handelTechChoice();
changeSelectedLinkState();
