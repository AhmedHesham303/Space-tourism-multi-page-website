const navSteps = document.querySelectorAll(".nav-step");
const navCrew = document.querySelector(".crew-page-link");
const navMembers = document.querySelectorAll(".nav-member");

function changeSelectedNavPoints() {
  navMembers.forEach((navMember) => {
    navMember.addEventListener("click", () => {
      navMembers.forEach((navMember) => {
        navMember.classList.remove("selected-member");
      });
      navMember.classList.add("selected-member");
    });
  });
}

function handelCrewChoice() {
  navMembers.forEach((choice, index) => {
    choice.addEventListener("click", () => {
      loadData(index);
    });
  });
}

function changeSelectedLinkState() {
  navSteps.forEach((navStep) => {
    navStep.classList.remove("selected-nav-link");
  });
  navCrew.classList.add("selected-nav-link");
}
handelCrewChoice();
changeSelectedLinkState();
changeSelectedNavPoints();
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

changeSelectedLinkState();
