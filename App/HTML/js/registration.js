
$(document).ready(function() {
    $("#createaccount").click(function() {
        var username = $("#exampleUsername1").val();
        var email = $("#exampleInputEmail1").val();
        var password = $("#exampleInputPassword1").val();
        var confirmPassword = $("#ConfirmInputPassword1").val();
        if (username == '' || email == '' || password == '' || confirmPassword == '') {
            alert("Please fill in all details");
        } 
        else if ((password.length) < 8){
            alert("Password should at least 8 characters");
        }
        else if (!(password).match(confirmPassword)) {
            alert("Your passwords don't match. Try again");
        } 
        else {
            // alert("Validation successful");
            // $.post("register.php", {
            //     username: username,
            //     email: email,
            //     password: password
            // }, 
            // function(data) {
            //     if (data == 'You have successfully registered') {
            //         $("form")[0].reset();
            //         window.location.href="/HTML/SIGN UP PAGE.html";
            //     }
            //     alert(data);
            // });
            $.post("http://localhost:8080/registerUserAccount", { 
                usernmame : $("#exampleUsername1").val(), 
                email : $("#exampleInputEmail1").val(),
                password :  $("#ConfirmInputPassword1").val()
            },
            function(data){
                alert("Account successfully created")
                window.location.href="LOGIN.html";
            });
        }
    });
});