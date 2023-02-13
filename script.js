// Adicione à página o título "Paleta de Cores"
const corpo = document.body;
const addHeader = document.createElement('header');
corpo.appendChild(addHeader);
const addH1 = document.createElement('h1');
addH1.id = 'title';
addH1.innerText = 'Paleta de Cores';
addHeader.appendChild(addH1);

// Adicione à página uma paleta contendo quatro cores distintas.
const addSection = document.createElement('section');
addSection.id = 'color-palette';
corpo.appendChild(addSection);

const section = document.getElementById('color-palette');
for (let index = 0; index <= 3; index += 1) {
  const addDiv = document.createElement('div');
  addDiv.className = 'color';
  section.appendChild(addDiv);
}

// Adicione a cor preta como a primeira cor da paleta de cores.
const divBlack = document.getElementsByClassName('color')[0];
const divRed = document.getElementsByClassName('color')[1];
const divGreen = document.getElementsByClassName('color')[2];
const divBlue = document.getElementsByClassName('color')[3];
divBlack.classList.add('black');
divRed.classList.add('red');
divGreen.classList.add('green');
divBlue.classList.add('blue');
divBlack.style.backgroundColor = 'black';
divRed.style.backgroundColor = 'red';
divGreen.style.backgroundColor = 'green';
divBlue.style.backgroundColor = 'blue';

// Adicione um botão para gerar cores aleatórias para a paleta de cores.
const addSection2 = document.createElement('section');
corpo.appendChild(addSection2);
const addButton = document.createElement('button');
addButton.id = 'button-random-color';
addButton.innerHTML = 'Cores aleatórias';
addSection2.appendChild(addButton);

// Adicione à página um quadro contendo 25 pixels.
const addSection3 = document.createElement('section');
addSection3.id = 'pixel-board';
corpo.appendChild(addSection3);
const section3 = document.getElementById('pixel-board');
for (let index2 = 0; index2 <= 24; index2 += 1) {
  const pixels = document.createElement('div');
  pixels.className = 'pixel';
  section3.appendChild(pixels);
}

// color black com classe selected
divBlack.classList.add('selected');

// Crie um botão que retorne a cor do quadro para a cor inicial.
const section2 = document.getElementsByTagName('section')[1];
const addButton2 = document.createElement('button');
addButton2.id = 'clear-board';
addButton2.innerHTML = 'Limpar';
section2.appendChild(addButton2);



  const btnRandom = document.getElementById('button-random-color');
  btnRandom.addEventListener('click', () => {
    const color = document.getElementsByClassName('color');                  
    for (let index = 1; index < color.length; index += 1) {
      const colorR = parseInt(Math.random() * 255);
      const colorG = parseInt(Math.random() * 255);
      const colorB = parseInt(Math.random() * 255);
      color[index].style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    }
  
    // Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.
    const salvandoCores = () => {
      const colorPalette = {
        0: divRed.style.backgroundColor,
        1: divGreen.style.backgroundColor,
        2: divBlue.style.backgroundColor,
      };
      localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
    };
    salvandoCores();
  });

  const recuperandoCores = JSON.parse(localStorage.getItem('colorPalette')) || [];
  const classeColor = document.getElementsByClassName('color');
  for (let index = 1; index < classeColor.length; index += 1) {
    classeColor[index].style.backgroundColor = recuperandoCores[index - 1];
  }
    
  // Crie uma função para selecionar uma cor na paleta de cores.    
  const colorSelected = document.querySelectorAll('.color');
  for (cores of colorSelected) {
    cores.addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
  // Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected').style.backgroundColor;
      event.target.style.backgroundColor = selected;
    });
  }

  // Crie um botão que retorne a cor do quadro para a cor inicial.
  const btnReset = document.getElementById('clear-board');
  const pixelBoard = document.querySelectorAll('.pixel');
  const reset = () => {
    for (let index = 0; index < pixelBoard.length; index += 1) {
      pixelBoard[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
    localStorage.clear('pixelBoard');
  };
  btnReset.addEventListener('click', (reset));

  // Crie uma função para salvar e recuperar o seu desenho atual no localStorage
  
  function salvandoCoresPintadas(){
    const quadroPintado = document.querySelector('#pixel-board');
    //console.log(quadroPintado.innerHTML);
    localStorage.setItem('pixelBoard', quadroPintado.innerHTML);
  }

  const btnCores = document.querySelector('#pixel-board');
  btnCores.addEventListener('click', (salvandoCoresPintadas));

  function recuperandoQuadro(){
    if (localStorage.getItem('pixelBoard') === true) {
    const quadroLocal = localStorage.getItem('pixelBoard');
    const quadro = document.querySelector('#pixel-board');
    quadro.innerHTML = quadroLocal;
    console.log(quadro);
    };
  }
  

  //Crie um input que permita à pessoa usuária preencher um novo tamanho para o quadro de pixels.
  
  
  const addInput = document.createElement('input');
  addInput.id = 'board-size';
  addInput.type = 'number';
  addInput.min = '0';
  addSection2.appendChild(addInput);
  const addBtnInput = document.createElement('button');
  addBtnInput.innerHTML = 'VQV';
  addBtnInput.id = 'generate-board';
  addSection2.appendChild(addBtnInput);

  function quadroNovo(){

  }

  
window.onload = () => {
  recuperandoQuadro()
};
