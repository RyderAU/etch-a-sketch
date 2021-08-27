let gridSize = 16;
const sizeSubmit = document.querySelector('#size-submit');
sizeSubmit.addEventListener('click', changeSize);

const clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', clearGrid);

generateGrid(gridSize);

function generateGrid(gridSize) {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 20px)`;

    for (let i = 0 ; i < Math.pow(gridSize, 2) ; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', colourSquare));
}

function changeSize() {
    gridSize = document.querySelector('#size-selection').value;
    generateGrid(gridSize);
}

function colourSquare(e) {
    e.target.classList.add('coloured-square');
}

function clearGrid () {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('coloured-square'));
}