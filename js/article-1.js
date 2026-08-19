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
