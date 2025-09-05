const formData = {
  email: "",
  message: "",
};

const key = "feedback-form-state";

const form = document.querySelector(".feedback-form");
form.addEventListener("input", inputHandler);
form.addEventListener("submit", submitHandler);

function inputHandler(event) {
  const savedData = localStorage.getItem(key);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.assign(formData, parsedData);
  }
  formData[event.target.name] = event.target.value;

  localStorage.setItem(key, JSON.stringify(formData));
}
function submitHandler(event) {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert("«Fill please all fields»");
    return;
  }
  console.log(formData);
    localStorage.removeItem(key);
    localStorage.clear();
  form.reset();
}
