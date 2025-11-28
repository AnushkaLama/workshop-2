let header = document.querySelector('header');

setInterval(() => {
    header.style.color = header.style.color === 'red' ? 'pink' : 'red';
}, 1000);
let form = document.querySelector('form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let message = document.getElementById('message');
let label = document.querySelectorAll('label');
let msg = document.querySelector('.msg');
form.addEventListener('submit', function(event) {
    if (name.value === '' || email.value === '') {
        event.preventDefault();
        label.forEach(function(lbl) {
            lbl.style.color = 'red';
        });
        msg.style.display = 'block';
        msg.textContent = 'please fill in all the info before submitting.';
    }
    else {
        event.preventDefault();
        label.forEach(function(lbl) {
            lbl.style.color = 'white';
        });
        msg.style.display = 'block';
        msg.textContent = 'Form submitted successfully!';
        form.reset();
    }
});

let ham = document.querySelector('.ham');
let navUl = document.querySelector('nav ul');
ham.addEventListener('click', function() {
    ham.textContent = ham.textContent === '☰' ? '✖' : '☰';
    if (navUl.style.display === 'flex') {
        navUl.style.display = 'none';

    } else {
        navUl.style.display = 'flex';
    }
});