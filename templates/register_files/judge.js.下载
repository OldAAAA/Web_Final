function isEmail()
{
    var email=document.getElementById("email").value;
	var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		strEmail=pattern.test(email);
    	if (strEmail)
    	{
			document.getElementById("checkemail").innerHTML=" "; 
			document.getElementById("email").style.borderColor="rgb(29,200,287)";
    	}
		else
    	{
			document.getElementById("checkemail").style .color="red";//设置邮箱不可用时的字体颜色
			document.getElementById("checkemail").style.fontSize="14px";
			document.getElementById("checkemail").innerHTML="Invalid email!";
			document.getElementById("email").style.borderColor="red";
			return false;
		}
}

function checkpassword(){
    if(document.getElementById("password").value.length<6){
        document.getElementById("checkpassword").style.color="red";
        document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Password too short (6 chars. min)";
		document.getElementById("password").style.borderColor="red";
	    return false;
    }else if(document.getElementById("password").value==null){
    	document.getElementById("checkpassword").style.color="red";
    	document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Password too short (6 chars. min)";
		document.getElementById("password").style.borderColor="red";
	    return false;
	}else if(document.getElementById("password_confirmation").value!=document.getElementById("password").value){
		document.getElementById("checkpassword").style.color="red";
		document.getElementById("checkpassword").style.fontSize="14px";
		document.getElementById("checkpassword").innerHTML="Password mismatch!";
		document.getElementById("password_confirmation").style.borderColor="red";
		return false;
	}else{
		document.getElementById("checkpassword").innerHTML="";
		document.getElementById("password").style.borderColor="rgb(29,200,287)";
		document.getElementById("password_confirmation").style.borderColor="rgb(29,200,287)";
		// document.getElementById("check").innerHTML="";
		// document.getElementById("check").style.display="none"; 
		// document.getElementById("check").style.display="inline"; 
	}
}
