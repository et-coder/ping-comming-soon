const button = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');
const illustration = document.querySelector('.illustration');
const container = document.querySelector('.container');
const error = document.createElement('p');
error.className = 'error';

document.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value;

    if (email === '' || email === null) {
        showError('Whoops! It looks like you forgot to add your email');
    } else if (!isValid(email)) {
        showError('Please provide a valid email address');
    } else if (isValid(email)) {
        input.value = '';
        removeError();
    }

})

function isValid(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(email);

}

function showError(message) {

    error.textContent = message;
    input.style.borderColor = 'hsl(354, 100%, 66%)';

    if (window.innerWidth >= 1024) {
        container.insertBefore(error, illustration);
    } else {
        form.insertBefore(error, button);
    }

}

function removeError() {
    error.remove();
    input.style.borderColor = 'hsl(223, 100%, 88%)';
    input.value = '';
}