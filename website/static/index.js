function deleteSem(semId) {
  fetch("/delete-sem", {
    method: "POST",
    body: JSON.stringify({ semId: semId }),
  }).then((_res) => {
    window.location.href = "/semester";
  });
}

function updateSem(semId) {
  const updatedSem = window.prompt("Enter Updated Semester");
  if (updatedSem) {
    fetch("/update-sem", {
      method: "POST",
      body: JSON.stringify({ semId: semId, updatedSem: updatedSem }),
    }).then((_res) => {
      window.location.href = "/semester";
    });
  }
}

function showSubjects(semId) {
  window.location.href = "/semester/" + semId;
}

function deleteSub(subId, semId) {
  fetch("/delete-sub", {
    method: "POST",
    body: JSON.stringify({ subId: subId }),
  }).then((_res) => {
    window.location.href = "/semester/" + semId;
  });
}

function updateSub(subId, semId) {
  const updatedSub = window.prompt("Enter Updated Subject");
  if (updatedSub) {
    fetch("/update-sub", {
      method: "POST",
      body: JSON.stringify({ subId: subId, updatedSub: updatedSub }),
    }).then((_res) => {
      window.location.href = "/semester/" + semId;
    });
  }
}

function showModules(subId, semId) {
  window.location.href = "/semester/" + semId + "/" + subId;
}

function deleteMod(modId, subId, semId) {
  fetch("/delete-mod", {
    method: "POST",
    body: JSON.stringify({ modId: modId }),
  }).then((_res) => {
    window.location.href = "/semester/" + semId + "/" + subId;
  });
}

function updateMod(modId, subId, semId) {
  const updatedMod = window.prompt("Enter Updated Module");
  if (updatedMod) {
    fetch("/update-mod", {
      method: "POST",
      body: JSON.stringify({ modId: modId, updatedMod: updatedMod }),
    }).then((_res) => {
      window.location.href = "/semester/" + semId + "/" + subId;
    });
  }
}

function showQuestions(modId, subId, semId) {
  window.location.href = "/semester/" + semId + "/" + subId + "/" + modId;
}

function deleteQuestion(quesId, modId, semId, subId) {
  fetch("/delete-question", {
    method: "POST",
    body: JSON.stringify({ quesId: quesId }),
  }).then((_res) => {
    window.location.href = "/semester/" + semId + "/" + subId + "/" + modId;
  });
}
function deleteMCQ(mcqId, subId, semId) {
  fetch("/delete-mcq", {
    method: "POST",
    body: JSON.stringify({ mcqId: mcqId }),
  }).then((_res) => {
    window.location.href = "/semester/" + semId + "/" + subId + "/mcq";
  });
}

function updateQuestion(quesId, modId, semId, subId) {
  const updatedQuestion = window.prompt("Enter Updated Question");
  if (updatedQuestion) {
    fetch("/update-question", {
      method: "POST",
      body: JSON.stringify({
        quesId: quesId,
        updatedQuestion: updatedQuestion,
      }),
    }).then((_res) => {
      window.location.href = "/semester/" + semId + "/" + subId + "/" + modId;
    });
  }
}

function updateQuestionCategory(quesId, modId, semId, subId) {
  const updatedQuestionCategory = window.prompt(
    "Enter Updated Question Category"
  );
  if (updatedQuestionCategory) {
    fetch("/update-question-category", {
      method: "POST",
      body: JSON.stringify({
        quesId: quesId,
        updatedQuestionCategory: updatedQuestionCategory,
      }),
    }).then((_res) => {
      window.location.href = "/semester/" + semId + "/" + subId + "/" + modId;
    });
  }
}

function goToSem() {
  window.location.href = "/semester";
}

function goToGenerate() {
  window.location.href = "/generate";
}

function displaySubs(semId) {
  window.location.href = "/generate/" + semId;
}

function displayCreateTemplate(subId, semId) {
  window.location.href = "/generate/" + semId + "/" + subId;
}

function addTemplate(semId, subId) {
  window.location.href = "/generate/" + semId + "/" + subId + "/create";
}

function addSubquestions(tempId, semId, subId) {
  window.location.href =
    "/generate/" + semId + "/" + subId + "/" + tempId + "/show";
}

function submitSubquestions(tempId, semId, subId) {
  window.location.href =
    "/generate/" + semId + "/" + subId + "/" + tempId + "/create";
}

function deleteTemplate(tempId, semId, subId) {
  fetch("/delete-template", {
    method: "POST",
    body: JSON.stringify({ tempId: tempId }),
  }).then((_res) => {
    window.location.href = "/generate/" + semId + "/" + subId;
  });
}

var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();
