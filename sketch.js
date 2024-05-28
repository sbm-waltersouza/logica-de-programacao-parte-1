let canvas;

function setup() {
  canvas = createCanvas(500, 400);
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluirPontos();
  marcarPonto();
}

function windowResized() {
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
