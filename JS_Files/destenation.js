const navSteps = document.querySelectorAll(".nav-step");
const navDestenation = document.querySelector(".destination-page-link");
const destenationChoices = document.querySelectorAll(".destenation_choice");
function changeSelectedLinkState() {
  navSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navDestenation.classList.add("selected-nav-link");
}

function changeSelectedInnerLinkState() {
  destenationChoices.forEach((destenation) => {
    destenation.addEventListener("click", () => {
      destenationChoices.forEach((navStep) => {
        navStep.classList.remove("selected-inner-nav-link");
      });
      destenation.classList.add("selected-inner-nav-link");
    });
  });
}

async function loadData(destenationNum) {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    displayDestination(data.destinations[destenationNum]);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayDestination(destination) {
  document.querySelector(".cur-destenation").textContent = destination.name;
  document.querySelector(".destenation-text").textContent =
    destination.description;
  document.querySelector(".moon-img").src = destination.images.png;
  document.querySelector(".distance-val").textContent = destination.distance;
  document.querySelector(".duration-val").textContent = destination.travel;
}

function handelDestenationChoice() {
  let choiceNum = 0;
  destenationChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      if (choice.textContent === "Moon") choiceNum = 0;
      else if (choice.textContent === "Mars") choiceNum = 1;
      else if (choice.textContent === "Europa") {
        choiceNum = 2;
      } else if (choice.textContent === "Titan") {
        choiceNum = 3;
      }
      loadData(choiceNum);
    });
  });
}

changeSelectedInnerLinkState();
handelDestenationChoice();

loadData(0);

changeSelectedLinkState();
