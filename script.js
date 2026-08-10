document.getElementById("year").textContent = String(new Date().getFullYear());

const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const form = document.getElementById("quote-form");
const status = document.getElementById("form-status");

const setFieldError = (input, message) => {
  const field = input.closest(".field");
  field.classList.toggle("invalid", Boolean(message));
  field.querySelector(`[data-error-for="${input.name}"]`).textContent = message;
};

const validate = () => {
  const errors = [];
  const required = ["name", "company"];

  for (const name of required) {
    const input = form.elements[name];
    const message = input.value.trim() ? "" : "This field is required.";
    setFieldError(input, message);
    if (message) errors.push(name);
  }

  const email = form.elements.email;
  const value = email.value.trim();
  let emailError = "";
  if (!value) emailError = "This field is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) emailError = "Enter a valid email address.";
  setFieldError(email, emailError);
  if (emailError) errors.push("email");

  return errors;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const errors = validate();

  if (errors.length) {
    status.className = "form-status failure";
    status.textContent = "Please fix the highlighted fields.";
    form.elements[errors[0]].focus();
    return;
  }

  status.className = "form-status success";
  status.textContent = `Thanks ${form.elements.name.value.trim()} — we'll reply to ${form.elements.email.value.trim()} within one business day.`;
  form.reset();
});
