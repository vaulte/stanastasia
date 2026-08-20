document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="#"]').forEach((link) => {
    link.addEventListener("click", (event) => event.preventDefault());
  });

  const buttons = document.querySelectorAll(".navbtn");
  buttons[0]?.addEventListener("click", () => history.back());
  buttons[1]?.addEventListener("click", () => history.forward());
  buttons[2]?.addEventListener("click", () => location.reload());
});
