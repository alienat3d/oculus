export default function handleShowGamesBtn() {
  const triggerButton = document.querySelector(".games__see-all-button");
  if (!triggerButton) return;
  const hiddenContentContainer = document.querySelector(
    ".games__hidden-content"
  );

  let isVisible = false;

  triggerButton.addEventListener("click", () => {
    if (isVisible) {
      triggerButton.textContent = "see all games";
      hiddenContentContainer.classList.remove("visible");
      setTimeout(() => (hiddenContentContainer.style.display = "none"), 300);
    } else {
      triggerButton.textContent = "hide games";
      hiddenContentContainer.style.display = "flex";
      setTimeout(() => hiddenContentContainer.classList.add("visible"), 0);
    }
    isVisible = !isVisible;
  });
}
