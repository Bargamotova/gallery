const copyText = document.querySelector(".copy__container");
const copyBtn = document.querySelector('.copy__btn');

copyBtn.addEventListener('click', function () {
  let input = copyText.querySelector(".copy__text");
  input.ariaSelected();
  document.execCommand("copy");
  copyText.classList.add('active');
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove('active');
  }, 2000)
});
