/* Ravenswood Student Forum — static GitHub Pages interactions */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".forum-page a[href='#']").forEach(link => {
    link.addEventListener("click", event => event.preventDefault());
  });

  const reply = [...document.querySelectorAll("button")]
    .find(button => button.textContent.trim() === "Reply");

  reply?.addEventListener("click", () => {
    alert("You must be logged in to reply to this thread.");
  });

  const tools = [...document.querySelectorAll("button")]
    .find(button => button.textContent.trim() === "Thread Tools");

  tools?.addEventListener("click", () => {
    alert("Thread tools are unavailable to Guest users.");
  });
});
