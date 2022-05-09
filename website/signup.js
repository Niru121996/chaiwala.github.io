const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();

	
	if(usernameValue === '') {
		setErrorFor(username, 'Please Enter valid UserName');
	} 
    else if(usernameValue!=='niru12') {
		setErrorFor(username, 'Entered User Name is Wrong');
	} else {
		setSuccessFor(username);
	}
	
   
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} 
    else if(passwordValue !=='niru@123') {
		setErrorFor(password, 'Passwords does not match');
    }
        else 
        {
		setSuccessFor(password);

		
	    }
	
	
}
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	
}

