const button = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');
const illustration = document.querySelector('.illustration');
const container = document.querySelector('.container');
let isShown = false;

document.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = input.value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const error = document.createElement('p');
    error.textContent = 'Please provide a valid email address'
    error.className = 'error';

    if (!pattern.test(email) && !isShown) {
        isShown = true;
        input.style.borderColor = 'hsl(354, 100%, 66%)';

        if (window.innerWidth >= 1024) {
            container.insertBefore(error, illustration);
        } else {
            form.insertBefore(error, button);
        }
    } else if (pattern.test(email) && isShown) {
        document.querySelector('.error').remove();
        input.style.borderColor = 'hsl(223, 100%, 88%)';
        input.value = '';
        isShown = false;
    }

})