const container = document.querySelector('#container');
let gridSize = 16;
const colors = [];

// creates divs inside the container
function createGrid(size) {
    clearContainer();
    const cellSize = 800 / size;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = createBox(cellSize);
        box.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            box.style.backgroundColor = randomColor;
        })
    }
}

// clears container
function clearContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//creates divs inside main container
function createBox(size) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    container.appendChild(box);
    return box;
}

// generates a random color for drawing
function randomColorGenerator() {
    for (let i = 0; i < 50; i++) {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        colors.push(randomColor);
    }
}

function getRandomColor() {
    randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function promptForDivSize(){
    let divSize;
    let isValid = false;

    while (!isValid) {
        divSize = prompt('Choose your div size!');
        if (divSize === null) {
            break;
        }

        const number = parseInt(divSize);

        if (!isNaN(number)) {
            isValid = true;
            gridSize = number;
            createGrid(gridSize);
        } else {
            alert("Please enter a valid number.");
        }
    }
}
const btn = document.querySelector('#btn');
btn.addEventListener('click', promptForDivSize);

createGrid(gridSize);
randomColorGenerator();

