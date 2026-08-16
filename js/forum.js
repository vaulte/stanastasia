document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll('.forum-page a[href="#"]')
    .forEach((a) => a.addEventListener("click", (e) => e.preventDefault()));
  document
    .querySelectorAll(".thread-actions button")
    .forEach((b) =>
      b.addEventListener("click", () =>
        alert("You must be logged in to use this feature."),
      ),
    );
});
