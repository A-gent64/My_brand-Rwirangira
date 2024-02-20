function valid() { 

	const email = 
		document.forms.fill.email.value;  
	const password = 
		document.forms.fill.pass.value; 
	console.log(email,password); 

	if (email === "" || !email.includes('@')) { 
		window.alert
			("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (password === "") { 
		alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 

	if (password.length < 6) { 
		alert 
			("Password should be atleast 6 character long"); 
		password.focus(); 
		return false; 

	} 
    return true; 
}