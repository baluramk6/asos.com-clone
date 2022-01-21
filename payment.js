document.querySelector("form").addEventListener("submit", payment);

var paymentArr = JSON.parse(localStorage.getItem("paymentData")) || [];

function payment(event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var birthday = document.getElementById("birthdate").value;
  var cardNo = document.getElementById("card-number").value;
  var cvv = document.getElementById("card-cvv").value;

  var month = document.getElementById("card-month").value;
  var year = document.getElementById("card-year").value;

  var paymentObj = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    birthday: birthday,
    cardNo: cardNo,
    cvv: cvv,
    month: month,
    year: year,
  };

  paymentArr.push(paymentObj);
  localStorage.setItem("paymentData", JSON.stringify(paymentArr));

  if (
    firstName !== "" &&
    lastName !== "" &&
    email !== "" &&
    birthday !== "" &&
    cardNo !== "" &&
    cvv !== "" &&
    month !== "" &&
    year !== ""
  ) {
    alert("Enter Otp = 1234");
    window.location.href = "otp.html";
  } else {
    alert("Fill the details");
  }
}
