document.addEventListener("DOMContentLoaded", () => {
  // Keep the opened message fully static/GitHub Pages compatible.
  document.querySelectorAll(".message-navigation button").forEach((button) => {
    button.addEventListener("click", () => {
      // Previous/Next are intentionally inert until neighbouring messages exist.
    });
  });
});
