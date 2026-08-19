document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".page-number input");
  const status = document.querySelector(".pdf-status span:nth-child(2)");
  const zoom = document.querySelector(".pdf-toolbar select");
  const page = document.querySelector(".pdf-page");

  function updatePage() {
    if (!input) return;
    let n = parseInt(input.value, 10);
    if (!Number.isFinite(n)) n = 1;
    n = Math.max(1, Math.min(14, n));
    input.value = n;
    if (status) status.textContent = `Page ${n} of 14`;
  }

  input?.addEventListener("change", updatePage);
  input?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      updatePage();
      input.blur();
    }
  });

  document.querySelectorAll('.pdf-sidebar a[href="#"]').forEach(a => {
    a.addEventListener("click", e => e.preventDefault());
  });

  const nav = document.querySelectorAll(".navbtn");
  nav[0]?.addEventListener("click", () => history.back());
  nav[1]?.addEventListener("click", () => history.forward());
  nav[2]?.addEventListener("click", () => location.reload());

  zoom?.addEventListener("change", () => {
    const n = parseInt(zoom.value, 10);
    if (page && Number.isFinite(n)) {
      page.style.transformOrigin = "top center";
      page.style.transform = `scale(${n / 100})`;
    }
  });
});
