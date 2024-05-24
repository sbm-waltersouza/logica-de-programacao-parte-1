let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
//carros
let xCarro = 420;


function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  mostrarCarro()
}

function mostrarAtor() {
  image(imagemDoAtor, 100, 366, 30, 30);
}

function mostrarCarro() {
  image(imagemCarro, xCarro, 40, 50, 40)
}