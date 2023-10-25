const container = document.querySelector('#container');

for (i = 0; i < 16 * 16; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}