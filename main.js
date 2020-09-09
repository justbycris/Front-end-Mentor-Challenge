const form = document.getElementById('form');

const firstname = document.getElementById('fname');
const lastname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('pssw');

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value === null) {
        messages.push('First Name cannot be empty')
    }


    e.preventDefault()
})