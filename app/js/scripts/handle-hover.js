export default function handleHover() {
  const gameCards = document.querySelectorAll(".games__cards .card");
  const gameCardsButtons = document.querySelectorAll(
    ".games__cards .card__button"
  );

  gameCardsButtons.forEach((button, idx) => {
    button.addEventListener("mouseenter", () => {
      if (!gameCards[idx].classList.contains("hovered")) {
        gameCards[idx].classList.add("hovered");
      }
    });
    button.addEventListener("mouseleave", () => {
      if (gameCards[idx].classList.contains("hovered")) {
        gameCards[idx].classList.remove("hovered");
      }
    });
  });
}
