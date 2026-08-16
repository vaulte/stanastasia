/* Repository article interactions */

document.addEventListener("DOMContentLoaded", () => {
  const printButton = [...document.querySelectorAll("button")]
    .find((button) => button.textContent.includes("Print"));

  printButton?.addEventListener("click", () => window.print());

  const bookmarkButton = [...document.querySelectorAll("button")]
    .find((button) => button.textContent.includes("Bookmark"));

  bookmarkButton?.addEventListener("click", () => {
    bookmarkButton.textContent =
      bookmarkButton.textContent.includes("✓")
        ? "🔖 Bookmark"
        : "✓ Bookmarked";
  });

  const emailButton = [...document.querySelectorAll("button")]
    .find((button) => button.textContent.includes("Email"));

  emailButton?.addEventListener("click", () => {
    window.location.href =
      "mailto:?subject=Infernal%20Flora%20in%20Temperate%20Wetlands&body=" +
      encodeURIComponent(window.location.href);
  });

  const pdfButton = [...document.querySelectorAll("button")]
    .find((button) => button.textContent.includes("PDF"));

  pdfButton?.addEventListener("click", () => {
    alert("PDF archive unavailable in this collection.");
  });

  const downloadButton = [...document.querySelectorAll("button")]
    .find((button) => button.textContent.includes("Download"));

  downloadButton?.addEventListener("click", () => {
    alert("Download permission denied: Restricted Collection.");
  });
});
