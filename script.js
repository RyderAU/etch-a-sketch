let gridSize = 16;
const sizeSubmit = document.querySelector('#size-submit');
sizeSubmit.addEventListener('click', changeSize);

const clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', clearGrid);

generateGrid(gridSize);

function generateGrid(gridSize) {
    const container = document.querySelector('#container');

    // remove child elements
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;

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
    let newSize = prompt("Number of squares per side for the new grid.");
    if (newSize > 100) newSize = 100;
    if (newSize < 1) newSize = 1;

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('coloured-square'));
    
    generateGrid(newSize);
}