//código do carro

let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];

function mostraCarro() {
    image(imagemCarros[0], xCarros[0], yCarros[0], 50, 40);
    image(imagemCarros[1], xCarros[1], yCarros[1], 50, 40);
    image(imagemCarros[2], xCarros[2], yCarros[2], 50, 40);
}

function movimentaCarro() {
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
        xCarros[i] -= velocidadeCarros[i];
    }
}

function voltaPosicaoInicialDoCarro() {
    for (let i = 0; i < imagemCarros.length; i = i + 1) {
        if (passouTodaAtela(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}

function passouTodaAtela(xCarros) {
    return xCarros[0] < -50;
}  