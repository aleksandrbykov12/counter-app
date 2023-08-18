let button = document.querySelector('.counter-btn');
let counterText = document.querySelector('.count');
let reset = document.querySelector('.reset-btn');

let counter = 0;

console.log(button);

// addEventListener - добавь обработку события

button.addEventListener('click', function() {
    counter += 1;   
    counterText.innerText = counter;

    if (counter > 0) {
        reset.classList.add('active')
    }
});

reset.addEventListener('click', function() {
    counter = 0;
    counterText.innerText = counter;
    reset.classList.remove('active');
});