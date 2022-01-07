$(document).ready(function () {
    $("#unamecheck").hide();
    $("#emailcheck").hide();
    $("#pswcheck").hide();
    $("#cpswcheck").hide();

    //validate username
    let unameError = true;
    $("#uname").keyup(function () {
        validateuname();
    });

    function validateuname() {
        let uname = $("#uname").val();
        if (uname.length == "") {
            $("#unamecheck").show();
            unameError = false;
            return false;
        } else if ((uname.length < 3) || (uname.length > 8)) {
            $("#unamecheck").show();
            $("#unamecheck").html("*length of Username must be between 3 to 8");
        } else {
            $("#unamecheck").hide();
        }
    }


    //validate email
    let emailError = true;
    $("#email").keyup(function () {
        validateemail();
    });

    function validateemail() {
        if ($("#email").val().length == "") {
            $("#emailcheck").show();
            emailError = false;
            return false;
        }
        if (IsEmail(email) == false) {
            $("#emailcheck").show();
            $("#emailcheck").html("*Please Enter Right Email Id");
            emailError = false;
            return false;
        } else {
            $("#emailcheck").hide();
        }

        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var email = $("#email").val();
            if (!regex.test(email)) {
                return false;
            } else {
                return true;
            }
        }
    }


    //validate pass
    let passError = true;
    $("#psw").keyup(function () {
        validatepass();
    });

    function validatepass() {
        if ($("#psw").val().length == "") {
            $("#pswcheck").show();
            passError = false;
            return false;
        }
        if (($("#psw").val().length < 3) || ($("#psw").val().length > 10)) {
            $('#pswcheck').show();
            $('#pswcheck').html("*length of your password must be between 3 and 10");
            passError = false;
            return false;
        } else {
            $("#pswcheck").hide();
        }
    }

    let repassError = true;
    $("#cpsw").keyup(function () {
        validaterepass();
    });


    //validate repass
    function validaterepass() {
        if ($("#cpsw").val().length == "") {
            $("#cpswcheck").show();
            repassError = false;
            return false;
        }
        if ($("#cpsw").val() != $("#psw").val()) {
            $("#cpswcheck").show();
            $("#cpswcheck").html("*Password didn't match");
            repassError = false;
            return false;
        } else {
            $("#cpswcheck").hide();
        }
    }

    //onclickv of submit buttons
    $("#login").click(function () {
        validateuname();
        validateemail();
        validatepass();
        validaterepass();

        if ((unameError == true) && (emailError == true) && (passError == true) && (repassError == true)) {
            return true;
        } else {
            return false;
        }
    });
});