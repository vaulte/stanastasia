/* Ravenswood Internet — static-site interactions */

document.addEventListener("DOMContentLoaded", () => {
  // Keep the old-browser controls harmless on a static GitHub Pages site.
  document.querySelectorAll(".navbtn").forEach((button) => {
    if (button.tagName === "BUTTON" && !button.onclick) {
      button.addEventListener("click", () => window.location.reload());
    }
  });

  // Search box: static-site friendly behaviour.
  const searchInput = document.querySelector(".search-container input");
  const searchButton = document.querySelector(".search-container button");

  if (searchInput && searchButton) {
    const runSearch = () => {
      const query = searchInput.value.trim();
      if (!query) return;

      // No backend is required. For now, mimic an old search engine by
      // sending the query to the browser's own search URL.
      window.location.href =
        "https://www.google.com/search?q=" + encodeURIComponent(query);
    };

    searchButton.addEventListener("click", runSearch);
    searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") runSearch();
    });
  }
});
