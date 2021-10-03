const scriptURL = 'https://script.google.com/macros/s/AKfycbx9zIjoIOAe_aoZPoAPXRBfuzhBZeP6dM6M_-f4iv0Xvm3PB_bs3agDtC9eorFU6MVH/exec';
const form = document.forms['formulir-pendaftaran-cc'];
const btnSubmit = document.querySelector('.btn-submit');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnLoading.classList.toggle('d-none');
  btnSubmit.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirin , hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnSubmit.classList.toggle('d-none');
      // tampilkan alert
      myAlert.classList.toggle('d-none');
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
