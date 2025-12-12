export default function validateForm() {
  const form = document.querySelector(".subscribe__form");
  const input = form.querySelector(".subscribe__form-input");
  const button = form.querySelector(".subscribe__button");

  const modal = document.querySelector(".modal");
  const modalButton = modal.querySelector(".modal__button");

  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;

  const regEx = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (input) => regEx.test(input);
  const cleanForm = () => {
    input.value = "";
    form.classList.remove("enabled");
    button.disabled = true;
  };

  input.addEventListener("input", (evt) => {
    const inputValue = evt.currentTarget.value;

    if (!validateEmail(inputValue)) {
      form.classList.remove("enabled");
      button.disabled = true;
    } else {
      form.classList.add("enabled");
      button.disabled = false;
    }
  });

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    document.body.style.cssText = `overflow: hidden; padding-right: ${scrollbarWidth}px;`;
    modal.classList.add("visible");
  });

  modalButton.addEventListener("click", () => {
    cleanForm();
    modal.classList.remove("visible");
    setTimeout(() => (document.body.style.cssText = `overflow: visible;`), 400);
  });
}
