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
divBlack.style.backgroundColor = 'black';
divRed.style.backgroundColor = 'red';
divGreen.style.backgroundColor = 'green';
divBlue.style.backgroundColor = 'blue';

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
for (let index2 = 0; index2 <= 24; index2 += 1) {
  const pixels = document.createElement('div');
  pixels.className = 'pixel';
  section3.appendChild(pixels);
};

//color black com classe selected
divBlack.classList.add('selected');

//Crie um botão que retorne a cor do quadro para a cor inicial.
const section2 = document.getElementsByTagName('section')[1];
const addButton2 = document.createElement('button');
addButton2.id = 'clear-board';
addButton2.innerHTML = 'Limpar';
section2.appendChild(addButton2);


window.onload = () => {

  const btnRandom = document.getElementById('button-random-color');
  btnRandom.addEventListener('click', () => {
//    let arr = [];                                
//    for (let index = 0; index <= 8; index += 1) {
//      let numeroAleatorio = parseInt(Math.random() * 255);
//      arr.push(numeroAleatorio);
//    };
//  divRed.style.backgroundColor = `rgb(${arr[1]}, ${arr[2]}, ${arr[3]})`;
//  divGreen.style.backgroundColor = `rgb(${arr[4]}, ${arr[5]}, ${arr[6]})`;
//  divBlue.style.backgroundColor = `rgb(${arr[7]}, ${arr[8]}, ${arr[0]})`;

    
    let arr = [];   
    const color = document.getElementsByClassName('color');
    //console.log(color);                       
    for (let index = 1; index < color.length; index += 1) {
      let r = parseInt(Math.random() * 255);
      let g = parseInt(Math.random() * 255);
      let b = parseInt(Math.random() * 255);
      console.log(r,g,b);
      color[index].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    };
  //divRed.style.backgroundColor = `rgb(${arr[1]}, ${arr[2]}, ${arr[3]})`;
  //divGreen.style.backgroundColor = `rgb(${arr[4]}, ${arr[5]}, ${arr[6]})`;
  //divBlue.style.backgroundColor = `rgb(${arr[7]}, ${arr[8]}, ${arr[0]})`;
  
  //Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.
  const salvandoCores = () => {
  let colorPalette = {
    0: divRed.style.backgroundColor,
    1: divGreen.style.backgroundColor,
    2: divBlue.style.backgroundColor,
  };
  localStorage.setItem('colorPalette', JSON.stringify(colorPalette));
  }
  salvandoCores();

  //localStorage.setItem('colorPalette',`rgb(${arr[1]}, ${arr[2]}, ${arr[3]})`);
  //localStorage.setItem('colorPalette2',`rgb(${arr[4]}, ${arr[5]}, ${arr[6]})`);
  //localStorage.setItem('colorPalette3',`rgb(${arr[7]}, ${arr[8]}, ${arr[0]})`);
  });

  const recuperandoCores = JSON.parse(localStorage.getItem('colorPalette')) || [];
  const x = document.getElementsByClassName('color');
    for (let index = 1; index < x.length; index += 1) {
    x[index].style.backgroundColor = recuperandoCores[index-1];
  };
    


  //let savedColors = localStorage.getItem('colorPalette');
  //let savedColors2 = localStorage.getItem('colorPalette2');
  //let savedColors3 = localStorage.getItem('colorPalette3');
  //divRed.style.backgroundColor = savedColors;
  //divGreen.style.backgroundColor = savedColors2;
  //divBlue.style.backgroundColor = savedColors3;

  //Crie uma função para selecionar uma cor na paleta de cores.    
  const colorSelected = document.querySelectorAll('.color');
  for (cores of colorSelected) {
    cores.addEventListener('click', (event) => {
      //Limpa seleção, se houver
      const selected = document.querySelector('.selected');
      if (selected) {
        selected.classList.remove('selected');
      }
      //Seleciona cor
      event.target.classList.add('selected');
    });
  }
//Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected').style.backgroundColor;
      //console.log(selected);
      event.target.style.backgroundColor = selected;
      //selected.classList.remove('selected');
    });
  }

  //Crie um botão que retorne a cor do quadro para a cor inicial.
  const btnReset = document.getElementById('clear-board');
  const pixelBoard = document.querySelectorAll('.pixel');
  //console.log(pixelBoard);
  const reset = () => {
    for (let index = 0; index < pixelBoard.length; index += 1){
      pixelBoard[index].style.backgroundColor = 'rgb(255, 255, 255)';
    }
    
  }
    btnReset.addEventListener('click', (reset));


    
}

