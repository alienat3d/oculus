export default function handleTabs() {
  const tabsButtons = document.querySelectorAll(".tabs__button");
  const tabsContents = document.querySelectorAll(".tabs__content-item");

  const showContent = (evt) => {
    const targetTab = evt.currentTarget;
    const currentTab = targetTab.dataset.button;
    const currentContent = document.getElementById(currentTab);

    tabsButtons.forEach((button) => {
      if (!button.classList.contains("active")) return;

      button.classList.remove("active");
    });

    tabsContents.forEach((content) => {
      if (!content.classList.contains("active")) return;

      content.classList.remove("active");
    });

    targetTab.classList.add("active");
    currentContent.classList.add("active");
  };

  tabsButtons.forEach((button) =>
    button.addEventListener("click", showContent)
  );
}
