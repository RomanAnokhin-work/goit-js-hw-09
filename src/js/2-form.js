const formData = {
  email: '',
  message: '',
};

const key = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
console.log(form.elements);

populateForm();
form.addEventListener('input', inputHandler);
form.addEventListener('submit', submitHandler);

function inputHandler(event) {

  formData[event.target.name] = event.target.value;

  localStorage.setItem(key, JSON.stringify(formData));
}

function submitHandler(event) {

  event.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('«Fill please all fields»');
    return;
  }
  console.log(formData);

  localStorage.removeItem(key);

  form.reset();
}

function populateForm() {
  const savedData = localStorage.getItem(key);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    email.value = parsedData.email;

    message.value = parsedData.message;

    formData.email = parsedData.email;

    formData.message = parsedData.message;
  }
}
