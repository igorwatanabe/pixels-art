//Adicione à página o título "Paleta de Cores"
const corpo = document.body;
const addHeader = document.createElement('header');
corpo.appendChild(addHeader);
const addH1 = document.createElement('h1');
addH1.id = 'title';
addH1.innerText = 'Paleta de Cores'
addHeader.appendChild(addH1);

//Adicione à página uma paleta contendo quatro cores distintas.
const addSection = document.createElement('section');
addSection.id = 'color-palette';
corpo.appendChild(addSection);

const section = document.getElementById('color-palette');
for (let index = 0; index <= 3; index += 1) {
    const addDiv = document.createElement('div');
    addDiv.className = 'color';
    section.appendChild(addDiv);
};

//Adicione a cor preta como a primeira cor da paleta de cores.
const divBlack = document.getElementsByClassName('color')[0];
const divRed = document.getElementsByClassName('color')[1];
const divGreen = document.getElementsByClassName('color')[2];
const divBlue = document.getElementsByClassName('color')[3];
divBlack.classList.add('black');
divRed.classList.add('red');
divGreen.classList.add('green');
divBlue.classList.add('blue');

//Adicione um botão para gerar cores aleatórias para a paleta de cores.
const addSection2 = document.createElement('section');
corpo.appendChild(addSection2);
const addButton = document.createElement('button');
addButton.id = 'button-random-color';
addButton.innerHTML = 'Cores aleatórias';
addSection2.appendChild(addButton);

//Adicione à página um quadro contendo 25 pixels.
const addSection3 = document.createElement('section');
addSection3.id = 'pixel-board';
corpo.appendChild(addSection3);
const section3 = document.getElementById('pixel-board');
for (let index2 = 0; index2 <= 4 * 6; index2 += 1) {
  const pixels = document.createElement('div');
  pixels.className = 'pixel';
  section3.appendChild(pixels);
}
//const linePixels = document.querySelectorAll('.pixel')[1];
//for (let index3 = 0; index3 <= 4 * 4; index3 += 1) {
  //const pixelsLine = document.createElement('div');
  //pixelsLine.className = 'pixel';
  //linePixels.appendChild(pixelsLine);
//}

window.onload = (event) => {
    
  const color1 = document.querySelector('.red');
  const color2 = document.querySelector('.green');
  const color3 = document.querySelector('.blue');
  const btnRandom = document.getElementById('button-random-color');

  btnRandom.addEventListener('click', () => {
    let arr = [];                                
    for (let index = 0; index <= 8; index += 1) {
      let numeroAleatorio = parseInt(Math.random() * 255);
      arr.push(numeroAleatorio);
    };
  color1.style.backgroundColor = `rgb(${arr[1]}, ${arr[2]}, ${arr[3]})`;
  color2.style.backgroundColor = `rgb(${arr[4]}, ${arr[5]}, ${arr[6]})`;
  color3.style.backgroundColor = `rgb(${arr[7]}, ${arr[8]}, ${arr[0]})`;

  //Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.
  localStorage.setItem('colorPalette',`rgb(${arr[1]}, ${arr[2]}, ${arr[3]})`);
  localStorage.setItem('colorPalette2',`rgb(${arr[4]}, ${arr[5]}, ${arr[6]})`);
  localStorage.setItem('colorPalette3',`rgb(${arr[7]}, ${arr[8]}, ${arr[0]})`);
  });
  let savedColors = localStorage.getItem('colorPalette');
  let savedColors2 = localStorage.getItem('colorPalette2');
  let savedColors3 = localStorage.getItem('colorPalette3');
  color1.style.backgroundColor = savedColors;
  color2.style.backgroundColor = savedColors2;
  color3.style.backgroundColor = savedColors3;
}

