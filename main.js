const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = form['fname'].value;
    const lastName = form['lname'].value;
    const email = form['email'].value;
    const password = form['pssw'].value;




    if (firstName === '') {
        addErrorTo('fname', 'First Name cannot be empty');
    } else {
        removeErrorFrom('fname');
    }

    if (lastName === '') {
        addErrorTo('lname', 'Last Name cannot be empty');
    } else {
        removeErrorFrom('lname');
    }

    if (email === '') {
        addErrorTo('email', 'Email is required');
    } else if (!isValid(email)) {
        addErrorTo('email', 'Looks like this is not an email');
    } else {
        removeErrorFrom('email');
    }

    if (password === '') {
        addErrorTo('pssw', 'Password cannot be empty');
    } else {
        removeErrorFrom('pssw');
    }
});

function addErrorTo(field, message) {
    const formControl = form[field].parentNode;
    formControl.classList.add('error');

    const small = form[field].parentNode.querySelector('small');
    small.innerText = message;
    small.style.opacity = '1';
}

function removeErrorFrom(field) {
    const formControl = form[field].parentNode;
    formControl.classList.remove('error');

    const small = formControl.querySelector('small');
    small.style.opacity = 0;
}


function isValid(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}