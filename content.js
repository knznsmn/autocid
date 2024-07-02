const loginTable = document.getElementById('tblLogin');

function Login() = {
	document.getElementById('txtUsername').value = '48579886';

  document.getElementById('txtPassword').value = 'ukwlmjpe';

  let securityCode = document.getElementById('Button3').value;

  document.getElementById('txtotp').value = securityCode;

  document.getElementById('btnEng').click();
}
function Button() {
	const button = document.createElement('button');
	button.classList('btn');
	button.setAttribute('id', 'btnLogin');
	loginTable.appendChild(button);
}





window.addEventListener('load', function() {
	Button();
	const button = document.getElementById('btnLogin');
});
button.addEventListener('click', function() {
	Login();
})

