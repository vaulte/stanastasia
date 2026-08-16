/* Ravenswood University Repository interactions */

document.addEventListener("DOMContentLoaded", () => {
  const keyword = document.querySelector("#repository-keywords");
  const author = document.querySelector("#repository-author");
  const department = document.querySelector("#repository-department");
  const searchButton = document.querySelector("#repository-search");
  const papers = [...document.querySelectorAll(".paper")];
  const resultCount = document.querySelector("#result-count");
  const clearButton = document.querySelector("#clear-search");

  function filterResults(){
    const key = (keyword?.value || "").trim().toLowerCase();
    const auth = (author?.value || "").trim().toLowerCase();
    const dept = (department?.value || "").trim().toLowerCase();

    let visible = 0;

    papers.forEach((paper) => {
      const text = paper.textContent.toLowerCase();
      const matchesKeyword = !key || text.includes(key);
      const matchesAuthor = !auth || text.includes(auth);
      const matchesDepartment =
        !dept ||
        dept === "any department" ||
        text.includes(dept);

      const show = matchesKeyword && matchesAuthor && matchesDepartment;
      paper.hidden = !show;

      if(show) visible++;
    });

    if(resultCount){
      resultCount.textContent =
        `${visible} record${visible === 1 ? "" : "s"} found`;
    }
  }

  searchButton?.addEventListener("click", filterResults);

  [keyword, author, department].forEach((control) => {
    control?.addEventListener("keydown", (event) => {
      if(event.key === "Enter") filterResults();
    });
  });

  clearButton?.addEventListener("click", () => {
    if(keyword) keyword.value = "";
    if(author) author.value = "";
    if(department) department.selectedIndex = 0;
    filterResults();
  });

  document.querySelectorAll(".repository aside li[data-filter]").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".repository aside li[data-filter]")
        .forEach((li) => li.classList.remove("active"));

      item.classList.add("active");

      const filter = item.dataset.filter.toLowerCase();

      papers.forEach((paper) => {
        const show =
          !filter ||
          paper.textContent.toLowerCase().includes(filter);

        paper.hidden = !show;
      });

      const visible = papers.filter((paper) => !paper.hidden).length;

      if(resultCount){
        resultCount.textContent =
          `${visible} record${visible === 1 ? "" : "s"} found`;
      }
    });
  });

  filterResults();
});
