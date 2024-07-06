const rootEl = $("#root");
const blogSubmission = JSON.parse(localStorage.getItem("blogSubmission"));

blogSubmission.forEach((blogSubmission) => {
  const blogCard = $('<li class="blog-li">');
  const blogContent = `
    <h3>${blogSubmission.subject}</h3>
    <p>${blogSubmission.thoughts}</p>
    <p>Posted by ${blogSubmission.username}</p>`;

  blogCard.html(blogContent);
  rootEl.append(blogCard);
});

localStorage.setItem("blogSubmission", JSON.stringify(blogSubmission));

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
