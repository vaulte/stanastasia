document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".forum a[href='#']").forEach(link => {
    link.addEventListener("click", e => e.preventDefault());
  });
});
