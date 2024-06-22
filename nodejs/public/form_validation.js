	var first_name=document.getElementById("first_name");
	var last_name=document.getElementById("last_name");
	var email=document.getElementById("email");
	var password=document.getElementById("password");
	var confirm_password=document.getElementById("confirm_password");
	var phone_number=document.getElementById("phone_number");

	var letters=/^[A-Za-z]+$/;
	if(first_name.value.match(letters)){
		var fname=1;
	}
	else{
	
	alert("First Name must have alphabet character only");
	name.focus();
	}

	if(last_name.value.match(letters)){
		var lname=1;
	}
	else{
	
	alert("Last Name must have alphabet character only");
	name.focus();
	}
	var format=/^([A-Za-z0-9_\.\-])+\@(([A-Za-z0-9\-])+\.)+([A-Za-z0-9]{2,4})+$/;
	if(email.value.match(format))
	{
		var e=1;
	}
	else{
		
		alert("Please Enter a Valid Email Addreess");
		email.focus();
	}

var min=4;
var max=15;
	var length=password.value.length;
	if(length>=min&&length<=max){
		var pwd=1;
	}
	else
	{
		
		alert("Password length must be between"+min+"and"+max);
		password.focus();
	}
	if(confirm_password.value==password.value){
		var cpwd=1;
	}
	else{
		
		alert("Passwords do not match");
		confirm_password.focus();
	}


	var phformat=/^[0-9]+$/;
	if(phone_number.value.match(phformat)&&phone_number.value.length===10){
		var ph=1;
	}
	else if(phone_number.length!=10){
		
		alert("Mobile Number must be of 10 digits");
		phone_number.focus();
	}
	else{
		
		alert("Mobile Number must contain only numbers");
		phone_number.focus();
	}
