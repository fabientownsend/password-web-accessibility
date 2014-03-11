var password = document.getElementById('password');
var type = password.getAttribute('type');

function handleClick() {
	if(password.getAttribute('type') === 'password')
		password.setAttribute('type', 'text');
	else
		password.setAttribute('type', 'password');
}