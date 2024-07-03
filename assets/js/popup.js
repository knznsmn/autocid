/*****************************************************************************
 *	Written by knznsmn
 *	https://www.github.com/knznsmn
 *****************************************************************************/

const save = document.getElementById('save');

save.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        chrome.storage.local.set({ username: username, password: password }, function() {
            document.getElementById('status').textContent = 'Credentials saved!';
        });
    } else {
        document.getElementById('status').textContent = 'Please do your best!';
    }
});
