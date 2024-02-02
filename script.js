const botaoPlayPause =  document.getElementById('play_pause');
const audioCapitulo =   document.getElementById('audio_chapter');
const botaoProximo =    document.getElementById('previous');
const botaoAnterior =   document.getElementById('next');
const nomeCapitulo = document.getElementById('chapter');
let capituloAtual = 1;

const numeroCapitulos = 10;
let estaTocando = false;

/*Função que faz tocar o audio*/
function tocarFaixa(){
    audioCapitulo.play();
    estaTocando = true;
    botaoPlayPause.classList.remove('bi-play-btn-fill');
    botaoPlayPause.classList.add('bi-pause-btn-fill');
    
}

/*Função que pausa a faixa*/
function pausarFaixa() {
    audioCapitulo.pause();
    estaTocando = false;
    botaoPlayPause.classList.remove('bi-pause-btn-fill');
    botaoPlayPause.classList.add('bi-play-btn-fill')
}

/*Função que verifica se esta tocando ou não*/
function tocarPausar () {
    if( estaTocando === false ) {
        tocarFaixa();
    } else {
        pausarFaixa();
    }
}

// Função troca nome capitulo
const trocarNomeFaixa = () => {
    nomeCapitulo.innerText = "Capitulo " + capituloAtual;
}

/*Função para proxima faixa*/
function proximaFaixa(){
    if( capituloAtual === numeroCapitulos ){
        capituloAtual = 1;
    } else {
        capituloAtual = capituloAtual + 1;
    }
    
    //Atualizando a url do audio
    audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual +".mp3";
    audioCapitulo.play();
    trocarNomeFaixa();
    
}

// Função para Faixa anterior
function anteriorFaixa(){
    if( capituloAtual === 1 ){
        capituloAtual = numeroCapitulos;
    } else {
        capituloAtual = capituloAtual - 1;
    }
    audioCapitulo.src = "./books/dom-casmurro/"+ capituloAtual +".mp3";
    audioCapitulo.play();
    trocarNomeFaixa();
}



botaoPlayPause.addEventListener('click', tocarPausar);
botaoProximo.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', anteriorFaixa);