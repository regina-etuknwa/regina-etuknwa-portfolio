// when the menu button is clicked, show menu
// hide closed icon, show opened icon
// when the new button is clicked, hide menu
// switch icons

function app(){

    const menuOpenedBtn = document.querySelector(".nav-menu-btn-open");
    const menuClosedBtn = document.querySelector(".nav-menu-btn-closed");
    const menu = document.querySelector(".nav-menu");
    const notMenuArea = document.querySelector(".not-menu-area");
    const allMenuItems = document.querySelectorAll(".nav-menu-item");

    const form = document.querySelector('.contact-form');
    const fullName = document.querySelector('.form-name');
    const email = document.querySelector('.form-email');
    const subject = document.querySelector('.form-subject');
    const message = document.querySelector('.form-message');

    const HIDDEN_CLASS = "hidden";

    function openMenu () {
        menu.classList.remove(HIDDEN_CLASS);
        menuClosedBtn.classList.add(HIDDEN_CLASS);
        menuOpenedBtn.classList.remove(HIDDEN_CLASS);
        notMenuArea.classList.remove(HIDDEN_CLASS);

        notMenuArea.addEventListener('click', closeMenu);
    }

    function closeMenu () {
        menu.classList.add(HIDDEN_CLASS);
        notMenuArea.classList.add(HIDDEN_CLASS);
        menuClosedBtn.classList.remove(HIDDEN_CLASS);
        menuOpenedBtn.classList.add(HIDDEN_CLASS);
    }

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

    function checkInputs() {
        const allInputs = document.querySelectorAll('.form-input-field');

        allInputs.forEach(input => {
            if (input.value == "") {
                input.classList.add('form-error');
                input.parentElement.classList.add('form-error');
            }

            if (email.value != ""){
                checkEmailField();
            }

            email.addEventListener('keyup', () => {
                checkEmailField();
            })

            input.addEventListener('keyup', () => {
                if (input.value != "") {
                    input.classList.remove('form-error');
                    input.parentElement.classList.remove('form-error');
                } else {
                    input.classList.add('form-error');
                    input.parentElement.classList.add('form-error');
                }
            })
        })
    }

    function checkEmailField () {
        // const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$;
        const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        const emailErrorText = document.querySelector('.email-error-text');

        if (!email.value.match(emailRegEx)) {
            email.classList.add('form-error');
            email.parentElement.classList.add('form-error');

            if (email.value != "") {
                emailErrorText.innerHTML = "*Enter a valid email address";
            } else {
                emailErrorText.innerHTML = "*Message cannot be blank";
            }
        } else {
            email.classList.remove('form-error');
            email.parentElement.classList.remove('form-error');
        }
    }

    // E653CE96CBB58A592F5794AFB90838AA48E3

    menuClosedBtn.addEventListener('click', openMenu);
    menuOpenedBtn.addEventListener('click', closeMenu);

    allMenuItems.forEach(menuItem => {
        menuItem.addEventListener('click', closeMenu);
    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        checkInputs();

        if (!fullName.classList.contains("form-error") && !email.classList.contains("form-error") && !subject.classList.contains("form-error") && !message.classList.contains("form-error") ) {
            sendEmail();
            form.reset();
            return false;
        }
    })

}

app();