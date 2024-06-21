function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "digwijaypatil6521@gmail.com",
        Password : "Digwijay@07",
        To : 'patildigvijay7878@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}
