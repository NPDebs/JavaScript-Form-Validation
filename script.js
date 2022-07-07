const form = document.getElementById("form")
const username = document.getElementById("username");
const email = document.getElementsById('email');
const password = document.getElementById('password');
const passwordCheck = getElementById('passwordCheck');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
});

function checkInputs() {
    //get the values from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = passwordCheck.value.trim();

    if(usernameValue === ''){
        //show error
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    }
    else {
        //add success class
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }
    else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else {
        setSuccessFor(password);
    }
    if(checkPasswordValue === ''){
        setErrorFor(password, 'Field cannot be blank');
    }
    else if(passwordValue !== checkPasswordValue){
        setErrorFor(passwordCheck, 'Passwords do not match!')
    }
    else {
        setSuccessFor(password);
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error message inside small
    small.innerText = message;
    
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
}