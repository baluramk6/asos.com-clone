document.querySelector("form").addEventListener("submit", signIn);
var storeData = JSON.parse(localStorage.getItem("signUpData"));

function signIn(event) {
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    for (var i = 0; i < storeData.length; i++) {
        if (storeData[i].usrEmail.length == "") {
            alert("Enter Email");
        } else if (storeData[i].usrPassword == "") {
            alert("Enter Password");
        } else if (storeData[i].usrEmail != email) {
            alert("Incorrect Email");
        } else if (storeData[i].usrPassword != password) {
            alert("Wrong Password");
        } else if (
            storeData[i].usrEmail == email &&
            storeData[i].usrPassword == password
        ) {
            alert("Login Successful");
            window.location.href = "index.html";
        }

        console.log(email, password);
    }
}