/* WebMail — static interactions */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".folder").forEach(folder => {
    folder.addEventListener("click", event => {
      event.preventDefault();
      document.querySelectorAll(".folder").forEach(f => f.classList.remove("active"));
      folder.classList.add("active");
    });
  });
