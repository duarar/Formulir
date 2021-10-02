const scriptURL = 'https://script.google.com/macros/s/AKfycbx9zIjoIOAe_aoZPoAPXRBfuzhBZeP6dM6M_-f4iv0Xvm3PB_bs3agDtC9eorFU6MVH/exec';
const form = document.forms['formulir-pendaftaran-cc'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
