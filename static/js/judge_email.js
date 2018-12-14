function isEmailorUsername_login()
{
    var email_username=document.getElementById("email_username").value;
    var email=email_username.replace(/(\s*$)/g, "");
    var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	var usern = /^[0-9a-z_]{1,}$/;
    	if (pattern.test(email)||usern.test(email_username))
    	{
    		document.getElementById("checkemail_username_in").innerHTML="";
			document.getElementById("email_username").style.borderColor="rgb(29,200,287)";
			return true;
    	}
		else
		{
			document.getElementById("checkemail_username_in").style .color="red";//设置邮箱不可用时的字体颜色
			document.getElementById("checkemail_username_in").style.fontSize="14px";
			document.getElementById("checkemail_username_in").innerHTML="Invalid email/username!";
			document.getElementById("email_username").style.borderColor="red";
			return false;
		}

}

function isEmail_update()
{
	document.getElementById("success_div").innerHTML="";
    var email=document.getElementById("email").value;
    email=email.replace(/(\s*$)/g, "");
	var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		strEmail=pattern.test(email);
    	if (strEmail)
    	{
			document.getElementById("email").style.borderColor="rgb(29,200,287)";
			document.getElementById("checkemail_up").innerHTML="";
			return true;
    	}
		else
    	{
			document.getElementById("checkemail_up").style .color="red";//设置邮箱不可用时的字体颜色
			document.getElementById("checkemail_up").style.fontSize="16px";
			document.getElementById("checkemail_up").innerHTML="Invalid email!";
			document.getElementById("email").style.borderColor="red";
			return false;
		}
}
