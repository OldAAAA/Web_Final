function isEmail() {
    var email = document.getElementById("email").value;
    var email=email.replace(/(\s*$)/g, "");
    var pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    strEmail = pattern.test(email);
    if (strEmail) {
        document.getElementById("checkemail").style.color = "green";
        document.getElementById("checkemail").style.fontSize = "14px";
        document.getElementById("checkemail").innerHTML = "✔";
        document.getElementById("email").style.borderColor = "rgb(29,200,287)";
        return true;
    }
    else {
        document.getElementById("checkemail").style.color = "red";//设置邮箱不可用时的字体颜色
        document.getElementById("checkemail").style.fontSize = "14px";
        document.getElementById("checkemail").innerHTML = "Invalid email!";
        document.getElementById("email").style.borderColor = "red";
        return false;
    }
}

function checkpassword() {
    var password = document.getElementById("password").value;

    if (password.length < 6) {
        document.getElementById("checkpassword").style.color = "red";
        document.getElementById("checkpassword").style.fontSize = "14px";
        document.getElementById("checkpassword").innerHTML = "Password too short (6 chars. min)";
        document.getElementById("password").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("checkpassword").style.color = "green";
        document.getElementById("checkpassword").style.fontSize = "14px";
        document.getElementById("checkpassword").innerHTML = "✔";
        document.getElementById("password").style.borderColor = "rgb(29,200,287)";
        return true;
    }

}

function checkpasswordconfirm() {
    var password = document.getElementById("password").value;
    var passwordconfirm = document.getElementById("password_confirmation").value;

    if (passwordconfirm != password) {
        document.getElementById("checkpasswordconfirm").style.color = "red";
        document.getElementById("checkpasswordconfirm").style.fontSize = "14px";
        document.getElementById("checkpasswordconfirm").innerHTML = "Password mismatch!";
        document.getElementById("password_confirmation").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("checkpasswordconfirm").style.color = "green";
        document.getElementById("checkpasswordconfirm").style.fontSize = "14px";
        document.getElementById("checkpasswordconfirm").innerHTML = "✔";
        document.getElementById("password_confirmation").style.borderColor = "rgb(29,200,287)";
        return true;
    }
}

function isUsername() {
    var username = document.getElementById("username").value;
    var usern = /^[0-9a-z_]{1,}$/;
    if (!usern.test(username)) {
        document.getElementById("checkusername").style.color = "red";
        document.getElementById("checkusername").style.fontSize = "14px";
        document.getElementById("checkusername").innerHTML = "Invalid username!";
        document.getElementById("username").style.borderColor = "red";
        return false;
    } else {
        document.getElementById("checkusername").style.color = "green";
        document.getElementById("checkusername").style.fontSize = "14px";
        document.getElementById("checkusername").innerHTML = "✔";
        document.getElementById("username").style.borderColor = "rgb(29,200,287)";
        return true;
    }
}

function isall() {
    aa = 1;

    var email = document.getElementById("email").value;
    var pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    strEmail = pattern.test(email);
    if (strEmail) {
        document.getElementById("checkemail").style.color = "green";
        document.getElementById("checkemail").style.fontSize = "14px";
        document.getElementById("checkemail").innerHTML = "✔";
        document.getElementById("email").style.borderColor = "rgb(29,200,287)";

    }
    else {
        document.getElementById("checkemail").style.color = "red";//设置邮箱不可用时的字体颜色
        document.getElementById("checkemail").style.fontSize = "14px";
        document.getElementById("checkemail").innerHTML = "Invalid email!";
        document.getElementById("email").style.borderColor = "red";
        aa = 0;
    }

    var password = document.getElementById("password").value;

    if (password.length < 6) {
        document.getElementById("checkpassword").style.color = "red";
        document.getElementById("checkpassword").style.fontSize = "14px";
        document.getElementById("checkpassword").innerHTML = "Password too short (6 chars. min)";
        document.getElementById("password").style.borderColor = "red";
        aa = 0;
    } else {
        document.getElementById("checkpassword").style.color = "green";
        document.getElementById("checkpassword").style.fontSize = "14px";
        document.getElementById("checkpassword").innerHTML = "✔";
        document.getElementById("password").style.borderColor = "rgb(29,200,287)";
    }

    var passwordconfirm = document.getElementById("password_confirmation").value;

    if (passwordconfirm != password) {
        document.getElementById("checkpasswordconfirm").style.color = "red";
        document.getElementById("checkpasswordconfirm").style.fontSize = "14px";
        document.getElementById("checkpasswordconfirm").innerHTML = "Password mismatch!";
        document.getElementById("password_confirmation").style.borderColor = "red";
        aa = 0;
    } else if (passwordconfirm == "") {
        document.getElementById("password_confirmation").style.borderColor = "red";
        aa = 0;
    } else {
        document.getElementById("checkpasswordconfirm").style.color = "green";
        document.getElementById("checkpasswordconfirm").style.fontSize = "14px";
        document.getElementById("checkpasswordconfirm").innerHTML = "✔";
        document.getElementById("password_confirmation").style.borderColor = "rgb(29,200,287)";

    }


    var username = document.getElementById("username").value;
    var usern = /^[0-9a-z_]{1,}$/;
    if (!usern.test(username)) {
        document.getElementById("checkusername").style.color = "red";
        document.getElementById("checkusername").style.fontSize = "14px";
        document.getElementById("checkusername").innerHTML = "Please enter username!";
        document.getElementById("username").style.borderColor = "red";
        aa = 0;
    } else {
        document.getElementById("checkusername").style.color = "green";
        document.getElementById("checkusername").style.fontSize = "14px";
        document.getElementById("checkusername").innerHTML = "✔";
        document.getElementById("username").style.borderColor = "rgb(29,200,287)";
    }


    if (aa != 1) {
        return false;
    } else {
        return true;
    }
}