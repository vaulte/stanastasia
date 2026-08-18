/* WebMail — static interactions */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", event => {
      event.preventDefault();
      document.querySelectorAll(".folder").forEach(f => f.classList.remove("active"));
      folder.classList.add("active");
    });
  });

  const refreshButtons = document.querySelectorAll(".email-toolbar button, .mail-content-header button");
  refreshButtons.forEach(button => {
    if (/refresh/i.test(button.textContent)) {
      button.addEventListener("click", () => window.location.reload());
    }
  });
});
