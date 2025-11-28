let header = document.querySelector('header');

setInterval(() => {
    header.style.color = header.style.color === 'red' ? 'darkred' : 'red';
}, 1000);

let form = document.querySelector('form');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('email');
let messageInput = document.getElementById('message');
let labels = document.querySelectorAll('label');
let msg = document.querySelector('.msg');

form.addEventListener('submit', function(event) {
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        event.preventDefault();
        
        labels.forEach(function(lbl) {
            lbl.style.color = 'red';
        });
        
        msg.style.display = 'block';
        msg.textContent = 'Please fill in all the info before submitting.';
    }
    else {
        event.preventDefault(); o
        
        labels.forEach(function(lbl) {
            lbl.style.color = 'white'; 
        });
        
        msg.style.display = 'block';
        msg.style.color = '#7fff00';
        msg.textContent = 'Form submitted successfully!';
        
        form.reset();
    }
});

let ham = document.querySelector('.ham');
let navUl = document.querySelector('nav ul');

ham.addEventListener('click', function() {
    ham.textContent = ham.textContent === '☰' ? '✖' : '☰';
    
    navUl.classList.toggle('active');
});