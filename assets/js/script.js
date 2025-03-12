const checkbox = document.getElementById('style-button');
const droparea = document.querySelector('.droparea-wrapper');

checkbox.addEventListener('change', function (){
  if (checkbox.checked) {
    droparea.classList.add('light-theme');
  } else {
    droparea.classList.remove('light-theme');
  }
});