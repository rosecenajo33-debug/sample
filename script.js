const openButton = document.getElementById("openButton");
const messageCard = document.getElementById("messageCard");
const toast = document.getElementById("toast");

openButton.addEventListener("click", () => {
  const isOpen = messageCard.classList.toggle("open");

  openButton.innerHTML = isOpen
    ? '<span class="heart">♥</span> Greeting Opened'
    : '<span class="heart">♡</span> Open My Greeting';

  toast.textContent = isOpen
    ? "Thank you for everything you do. ♡"
    : "A little message, just for you. ♡";

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);

  if (isOpen) {
    messageCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
