let hamburger = document.querySelector('.hamburger')
let closeElem = document.querySelector('.menu__close_btn');
let menuOverlay = document.querySelector('.menu__overlay')
let menu = document.querySelector('.menu');
let menuLink = [];
menuLink = document.querySelectorAll('.menu__link')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    menuOverlay.classList.add('active');

});
function hide () {
    menu.classList.remove('active');
    menuOverlay.classList.remove('active');
}

closeElem.addEventListener('click', hide);
menuOverlay.addEventListener('click', hide);

for (i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', hide)
}


// script for form, sends to mail use phpMailer

const form = document.querySelector('.contact__form');
    form.addEventListener('submit', formSend);

async function formSend (e) {
    e.preventDefault();
    // console.log(form)

    let error = formValidate(form);
    console.log(form)
    if (error === 0) {
        let formData =new FormData(form)

        let object = {};
        formData.forEach((value, key) => {object[key] = value})
        console.log(JSON.stringify(object));
        let response = fetch ('../send2.php',{
            method: 'POST',
            body: JSON.stringify(object)
        });
        console.log(response);
        console.log(response.json());
    } else {
        alert("Заповніть будьласка, усі вікна червоного кольору");
    }

    

    function formValidate (form) {
        let error = 0;
        let forRequired = document.querySelectorAll('.require');
        for (let i = 0; i < forRequired.length; i++ ) {
            const input = forRequired[i];
            formRemoveError(input);
                if (input.classList.contains('_email')) {
                    // console.log('first aid')
                    if (emailValidate(input)) {
                        // console.log('log_in')
                    } else {
                        formAddError(input);
                        // console.log('A?')
                        error++
                    }   
                } else { 
                     if (input.value === ''){
                        formAddError(input);
                        error++;
                }
            }
        }
        // console.log(error)
        return error;
    }
    function formAddError (input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    
    function formRemoveError (input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailValidate (input) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
    }
}