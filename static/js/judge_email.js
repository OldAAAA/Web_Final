function isEmail_login()
{
    var email=document.getElementById("email").value;
	var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		strEmail=pattern.test(email);
    	if (strEmail)
    	{
    		document.getElementById("checkemail_in").innerHTML="";
			document.getElementById("email").style.borderColor="rgb(29,200,287)";
			return true;
    	}
		else
    	{
			document.getElementById("checkemail_in").style .color="red";//设置邮箱不可用时的字体颜色
			document.getElementById("checkemail_in").style.fontSize="14px";
			document.getElementById("checkemail_in").innerHTML="Invalid email!";
			document.getElementById("email").style.borderColor="red";
			return false;
		}
}

function isEmail_update()
{
    var email=document.getElementById("email").value;
	var pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		strEmail=pattern.test(email);
    	if (strEmail)
    	{
			document.getElementById("email").style.borderColor="rgb(29,200,287)";
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
