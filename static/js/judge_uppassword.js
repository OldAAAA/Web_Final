var emailright= false;
var old_password = true;
var passwordright = true;
var conpasswordright = true;


function checkpassword(){
	if(document.getElementById("old_password").value.length<6){
        document.getElementById("checkpassword").style.color="red";
        document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Invalid password!";
		document.getElementById("old_password").style.borderColor="red";
		old_password = false;
	    return false;
	}else if(document.getElementById("old_password").value==null){
        document.getElementById("checkpassword").style.color="red";
        document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Invalid password!";
		document.getElementById("old_password").style.borderColor="red";
		old_password = false;
	    return false;
    }else if(document.getElementById("password").value.length<6){
        document.getElementById("checkpassword").style.color="red";
        document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Password too short (6 chars. min).";
		document.getElementById("password").style.borderColor="red";
		passwordright = false;
	    return false;
    }else if(document.getElementById("password").value==null){
    	document.getElementById("checkpassword").style.color="red";
    	document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Password too short (6 chars. min).";
		document.getElementById("password").style.borderColor="red";
		passwordright = false;
	    return false;
	}else if(document.getElementById("password_confirmation").value!=document.getElementById("password").value){
		document.getElementById("checkpassword").style.color="red";
		document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Password mismatch!";
		document.getElementById("password_confirmation").style.borderColor="red";
		conpasswordright = false;
		return false;
	}else{
		document.getElementById("checkpassword").innerHTML="";
		document.getElementById("password").style.borderColor="rgb(29,200,287)";
		document.getElementById("password_confirmation").style.borderColor="rgb(29,200,287)";
	}
}

function checkoldpassword() {
	document.getElementById("success2_div").innerHTML="";
	if(document.getElementById("old_password").value.length<6){
        document.getElementById("check_oldpassword").style.color="red";
        document.getElementById("check_oldpassword").style.fontSize="14px";
		document.getElementById("check_oldpassword").innerHTML="Invalid old password!";
		document.getElementById("old_password").style.borderColor="red";
	    return false;
	}else if(document.getElementById("old_password").value==null){
        document.getElementById("check_oldpassword").style.color="red";
        document.getElementById("check_oldpassword").style.fontSize="14px";
		document.getElementById("check_oldpassword").innerHTML="Invalid old password!";
		document.getElementById("old_password").style.borderColor="red";
	    return false;
    }else{
		document.getElementById("check_oldpassword").innerHTML="";
		document.getElementById("old_password").style.borderColor="rgb(29,200,287)";
		return true;
	}
}

function checknewpassword() {
	document.getElementById("success2_div").innerHTML="";
	if(document.getElementById("password").value.length<6){
        document.getElementById("check_newpassword").style.color="red";
        document.getElementById("check_newpassword").style.fontSize="14px";
		document.getElementById("check_newpassword").innerHTML="Password too short (6 chars. min).";
		document.getElementById("password").style.borderColor="red";
	    return false;
    }else if(document.getElementById("password").value==null){
    	document.getElementById("check_newpassword").style.color="red";
    	document.getElementById("check_newpassword").style.fontSize="14px";
		document.getElementById("check_newpassword").innerHTML="Password too short (6 chars. min).";
		document.getElementById("password").style.borderColor="red";
	    return false;
	}else{
		document.getElementById("check_newpassword").innerHTML="";
		document.getElementById("password").style.borderColor="rgb(29,200,287)";
		return true;
	}
}

function checkpasswordconfirm() {
	document.getElementById("success2_div").innerHTML="";
	if(document.getElementById("password_confirmation").value!=document.getElementById("password").value){
		document.getElementById("check_passwordconfirm").style.color="red";
		document.getElementById("check_passwordconfirm").style.fontSize="14px";
		document.getElementById("check_passwordconfirm").innerHTML="Password mismatch!";
		document.getElementById("password_confirmation").style.borderColor="red";
		return false;
	}else{
		document.getElementById("check_passwordconfirm").innerHTML="";
		document.getElementById("password_confirmation").style.borderColor="rgb(29,200,287)";
		return true;
	}
}


