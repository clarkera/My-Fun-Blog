const usernameInput = document.querySelector("#username-input");
const subjectInput = document.querySelector("#subject-input");
const thoughtsInput = document.querySelector("#thoughts-input");
const submitInput = document.querySelector("#submit");

let blogSubmission = JSON.parse(localStorage.getItem("blogSubmission")) || [];

submitInput.addEventListener("click", function (event) {
  event.preventDefault();

  const newSubmission = {
    username: usernameInput.value,
    subject: subjectInput.value,
    thoughts: thoughtsInput.value,
  };

  if (
    !newSubmission.username.trim() ||
    !newSubmission.subject.trim() ||
    !newSubmission.thoughts.trim()
  ) {
    alert("Please fill in all fields before submitting.");
    return;
  }

  blogSubmission.push(newSubmission);

  localStorage.setItem("blogSubmission", JSON.stringify(blogSubmission)); // Store updated submissions list

  window.location.href = "blog.html";

  usernameInput.value = "";
  subjectInput.value = "";
  thoughtsInput.value = "";
});

const toggleCheckbox = document.getElementById("dark-mode-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggleCheckbox.checked = true;
} else {
  toggleCheckbox.checked = false;
}

toggleCheckbox.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    toggleCheckbox.checked = true;
  } else {
    localStorage.setItem("theme", "light");
    toggleCheckbox.checked = false;
  }
});
