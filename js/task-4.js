const form = document.querySelector("form");
const email = document.querySelector('input[name="email"]');
const password = document.querySelector('input[name="password"]');

form.addEventListener("submit", event => {
	event.preventDefault();
	if (email.value === "" || password.value === "" ) {
		alert("You can't leave empty fields")
		return;
	}
	console.log(`Email: ${email.value.trim()}`);
	console.log(`Password: ${password.value.trim()}`);
    
	
    form.reset();
});

