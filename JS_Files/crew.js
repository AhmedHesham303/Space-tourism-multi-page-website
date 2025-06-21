const navSteps = document.querySelectorAll(".nav-step");
const navCrew = document.querySelector(".crew-page-link");
function changeSelectedLinkState() {
  navSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navCrew.classList.add("selected-nav-link");
}

changeSelectedLinkState();

async function loadData(crewMemberNum) {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    displayCrewMemberInfo(data.crew[crewMemberNum]);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayCrewMemberInfo(crewMember) {
  document.querySelector(".crew-member-name").textContent = crewMember.name;
  document.querySelector(".crew-member-title").textContent = crewMember.role;

  document.querySelector(".crew-member-img").src = crewMember.images.png;

  document.querySelector(".crew-member-description").textContent =
    crewMember.bio;
}

// function handelCrewMemberChoice() {
//   let choiceNum = 0;
//   destenationChoices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//       if (choice.textContent === "Moon") choiceNum = 0;
//       else if (choice.textContent === "Mars") choiceNum = 1;
//       else if (choice.textContent === "Europa") {
//         choiceNum = 2;
//       } else if (choice.textContent === "Titan") {
//         choiceNum = 3;
//       }
//       loadData(choiceNum);
//     });
//   });
// }

// handelDestenationChoice();

loadData(0);

changeSelectedLinkState();
