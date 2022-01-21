document.querySelector("form").addEventListener("submit", formSubmit);
var userStack = JSON.parse(localStorage.getItem("signUpData")) || [];


function formSubmit(event) {
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var first_name = document.querySelector("#first_name").value;
    var last_name = document.querySelector("#last_name").value;
    var signon_password = document.querySelector("#signon_password").value;
    var dob = document.querySelector("#dob").value;

    var userData = {
        usrEmail: email,
        usrFirstName: first_name,
        usrFirstName: last_name,
        usrPassword: signon_password,
        userDob: dob,
    };

    userStack.push(userData);
    //console.log(userStack);

    localStorage.setItem("signUpData", JSON.stringify(userStack));
    alert("Signup Successful");
    window.location.href = "login.html";

}
console.log("testing")