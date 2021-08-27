const container = document.querySelector('#container');

container.style.gridTemplateColumns = `repeat(16, 20px)`;
container.style.gridTemplateRows = `repeat(16, 20px)`;

for (let i = 0 ; i < 256 ; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => square.addEventListener('mouseover', colourSquare));

function colourSquare(e) {
    e.target.classList.add('coloured-square');
}