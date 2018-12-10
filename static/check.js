function checkEmail() {
    var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if (regex.test(document.getElementById('txt_id').value)) {
        document.getElementById('txt_id').style.borderColor = 'green';
        return true;
    }
    else {
        document.getElementById('txt_id').style.borderColor = 'red';

        return false;
    }
}
function checkEmail_2() {
    var regex = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if (regex.test(document.getElementById('txt_email').value)) {
        document.getElementById('txt_email').style.borderColor = 'green';
        return true;
    }
    else {
        document.getElementById('txt_email').style.borderColor = 'red';

        return false;
    }
}
function checkUsername() {
    var regex = /^[a-z]+$/;
    if (regex.test(document.getElementById('txt_usrname').value)) {
        document.getElementById('txt_usrname').style.borderColor = 'green';
        return true;
    }
    else {
        document.getElementById('txt_usrname').style.borderColor = 'red';

        return false;
    }
}
// me.html
function checkNewPassword() {
    var password = document.getElementById("new_password"); //获取密码框值
    if (password.value.length < 6) {
        document.getElementById('new_password').style.borderColor = 'red';
    } else {
        document.getElementById('new_password').style.borderColor = 'green';
    }
}
function checkNewPasswordConfirm() {
    var password = document.getElementById("new_password_confirm"); //获取密码框值
    if (password.value.length < 6) {
        document.getElementById('new_password_confirm').style.borderColor = 'red';
    } else {
        document.getElementById('new_password_confirm').style.borderColor = 'green';
    }
}
// me.html
function checkPassword1() {
    var password = document.getElementById("txt_pw"); //获取密码框值
    if (password.value.length < 6) {
        document.getElementById('txt_pw').style.borderColor = 'red';
    } else {
        document.getElementById('txt_pw').style.borderColor = 'green';
    }
}

function checkPassword2() {
    var password = document.getElementById("txt_pw_confirm"); //获取密码框值
    if (password.value.length < 6) {
        document.getElementById('txt_pw_confirm').style.borderColor = 'red';
    } else {
        document.getElementById('txt_pw_confirm').style.borderColor = 'green';
    }
}

function check_register() {
    document.getElementById('error_div').innerHTML = "";
    var email = document.getElementById("txt_id"); //get value in email field
    var username = document.getElementById("txt_usrname") //get value in username field
    var password = document.getElementById("txt_pw"); //get value in password field
    var password_confirm = document.getElementById("txt_pw_confirm"); //get value in password confirm field
    var a = 0;

    var regex_email = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if (!regex_email.test(email.value)) {
        a = 1;
        document.getElementById("usrEmailErr").innerHTML = "enter a valid email address.";
    } else {
        document.getElementById("usrEmailErr").innerHTML = "";
    }

    var regString = /^[a-z]+$/;
    if (!regString.test(username.value)) {
        a = 1;
        document.getElementById("usrnameErr").innerHTML = "username has illegal characters.";
    } else {
        document.getElementById("usrnameErr").innerHTML = "";
    }

    if (password.value != password_confirm.value) {
        a = 1;
        document.getElementById("usrPasswordMismatchErr").innerHTML = "password mismatch.";

    } else {
        document.getElementById("usrPasswordMismatchErr").innerHTML = "";
    }

    if (password.value.length < 6) {
        a = 1;
        document.getElementById("usrPasswordShortErr").innerHTML = "password too short.";
    } else {
        document.getElementById("usrPasswordShortErr").innerHTML = "";
    }

    if (a == 1) {
        return false;
    } else {
        return true;
    }

}
function check_changeEmail(){
    var email = document.getElementById("txt_email"); //get value in email field
    var a = 0;
    var regex_email = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    if (!regex_email.test(email.value)) {
        a = 1;
        document.getElementById("usrChangeEmailErr").innerHTML = "enter a valid email address.";
    } else {
        document.getElementById("usrChangeEmailErr").innerHTML = "";
    }
     if (a == 1) {
        return false;
    } else {
        return true;
    }
}
function check_changePassword(){
    var a = 0;
    var password = document.getElementById("new_password"); //get value in password field
    var password_confirm = document.getElementById("new_password_confirm"); //get value in password confirm field
    if (password.value != password_confirm.value) {
        a = 1;
        document.getElementById("passwordNotMatch").innerHTML = "password mismatch.";

    } else {
        document.getElementById("passwordNotMatch").innerHTML = "";
    }

    if (password.value.length < 6) {
        a = 1;
        document.getElementById("newPasswordTooShort").innerHTML = "password too short.";
    } else {
        document.getElementById("newPasswordTooShort").innerHTML = "";
    }
     if (a == 1) {
        return false;
    } else {
        return true;
    }
}
//function earsureerror(int i){
//    if(i==0){
//        document.getElementById('error_div').innerHTML = "";
//    }
//    if(i==1){
//        document.getElementById('usrnameErr').innerHTML = "";
//    }
//    if(i==2){
//        document.getElementById('usrPasswordShortErr').innerHTML = "";
//    }
//    if(i==3){
//        document.getElementById('usrPasswordMismatchErr').innerHTML = "";
//    }
//}