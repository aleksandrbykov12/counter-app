const counterValue = document.getElementById('counterValue');
const addButton = document.getElementById('addButton');
const resetButton = document.getElementById('resetButton');

let counter = 0;

addButton.addEventListener('click', addCounter);
resetButton.addEventListener('click', resetCounter);

function addCounter() {
    counter += 1;
    counterValue.innerText = counter;

    if (counter > 0) {
        resetButton.classList.add('resetButton-active');
    }
};

function resetCounter() {
    counter = 0;
    counterValue.innerText = counter;

    if (counter == 0) {
        resetButton.classList.remove('resetButton-active');
    }
};