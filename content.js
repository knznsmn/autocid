window.addEventListener('load', function() {
  document.getElementById('txtUsername').value = '';

  document.getElementById('txtPassword').value = '';

  let securityCode = document.getElementById('Button3').value;

  document.getElementById('txtotp').value = securityCode;

  document.getElementById('btnEng').click();
});

