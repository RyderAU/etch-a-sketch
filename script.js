const container = document.querySelector('#container');

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