const container = document.querySelector('#container');
let gridSize = 16;
const colors = [];

// creates divs inside the container
function createGrid(size) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    const cellSize = 800 / size;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${cellSize}px`;
        box.style.height = `${cellSize}px`;
        container.appendChild(box);
        box.addEventListener('mouseover', () => {
            const randomColor = getRandomColor();
            box.style.backgroundColor = randomColor;
        })
    }
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


const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
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
            alert("Please enter a valid number.")
        }
    }
    
})

createGrid(gridSize);
randomColorGenerator();

