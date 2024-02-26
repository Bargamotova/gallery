let copyText = document.querySelector(".copy__text");

copyText.querySelector(".copy__btn").addEventListener('click', function () {
  let input = copyText.querySelector("input.text");
  input.ariaSelected();
  document.execCommand("copy");
  copyText.classList.add('active');
  window.getSelection().removeAllRanges();
  setTimeout(function () {
    copyText.classList.remove('active');
  }, 2000)
});
