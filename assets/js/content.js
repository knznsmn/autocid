/*****************************************************************************
 *	Written by knznsmn
 *	https://www.github.com/knznsmn
 *****************************************************************************/

const loginTable = document.getElementById('tblLogin');

const msg = document.createElement('p');
msg.classList.add('format');
msg.style.textAlign = 'center';
msg.style.margin = "16px auto";

const message = {
	empty: `Save the login details first...`,
	login: `Auto-filled boxes. Logging in now...`
}

function Login() {
	chrome.storage.local.get(['username', 'password'], function(data) {
		if (data.username && data.password) {
			document.getElementById('txtUsername').value = data.username;
			document.getElementById('txtPassword').value = data.password;
			document.getElementById('txtotp').value = document.getElementById('Button3').value;
			setTimeout(function (){
				document.getElementById('btnEng').click();
			}, 1000);
		}
		else {
			msg.textContent = message.empty;
			loginTable.appendChild(msg);
		}
	});
}

function postMsg() {
	msg.textContent = message.login;
	loginTable.appendChild(msg);
}

loginTable.addEventListener('click', function () {
	postMsg();
	Login();
})
window.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		postMsg();
		Login();
	}
})