function app() {
    const form = document.querySelector('form');
    const fullName = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');

    

    function sendEmail() {
        const bodyMessage = `Full Name: ${fullName.value} <br>
        Email: ${email.value} <br>
        Message: ${message.value} <br>`;

        Email.send({
            SecureToken : "b6055773-481d-444e-a0ad-987672c1c804", 
            
            To : 'reginaetuknwa@gmail.com',
            From : "reginaetuknwa@gmail.com",
            Subject : subject.value,
            Body : bodyMessage
        }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
        );

    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        sendEmail();
        form.reset();
        return false;
    })


}

app();