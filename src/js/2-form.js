const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', handleInput);

function handleInput(event) {
  const { name, value } = event.target;
  if (name === 'email') {
    formData.email = value;
  } else if (name === 'message') {
    formData.message = value;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', hendleSubmit);

function hendleSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    console.log('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(LOCAL_STORAGE_KEY);

  formData.email = '';
  formData.message = '';

  form.reset();
}
