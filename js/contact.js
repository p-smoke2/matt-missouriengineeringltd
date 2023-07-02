const _name = document.querySelector("#con_name");
const _phone = document.querySelector("#con_phone");
const _email = document.querySelector("#con_email");
const _subject = document.querySelector("#con_subject");
const _message = document.querySelector("#con_message");
const submitBtn = document.querySelector("#con_submit");
const contactForm = document.querySelector("#contactForm1");

function validateForm() {
  if (
    _name.value !== "" &&
    _phone.value !== "" &&
    _email.value !== "" &&
    _subject.value !== "" &&
    _message.value !== ""
  ) {
    return true;
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateForm()) {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "sammyjayden27@gmail.com",
      Password: "A6085795AE1C8622E63219C610460C668F77",
      From: "sammyjayden27@gmail.com", //account used for registration
      To: "techwithtols@gmail.com", // where you want it delivered to
      ReplyTo: _email.value,
      Subject: _subject.value,
      Body: _message.value,
    }).then((message) => alert(message));
  }
});
