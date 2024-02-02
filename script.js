//document.addEventListener('DOMContentLoaded', function(){


    const botaoPlayPause =  document.getElementById('play_pause');
    const audioCapitulo =   document.getElementById('audio_chapter');
    const botaoProximo =    document.getElementById('previous');
    const botaoAnterior =   document.getElementById('next');
    const nomeCapitulo = document.getElementById('chapter');
    const volumeControl = document.getElementById('volume_control');
    const progressBar = document.getElementById('progress_bar')
    let capituloAtual = 1;

    const numeroCapitulos = 10;
    let estaTocando = false;


    volumeControl.addEventListener('input', () => {
        audioCapitulo.volume = volumeControl.value / 100;
    })

    audioCapitulo.addEventListener('timeupdate', () => {
        const percentualConcluido = (audioCapitulo.currentTime / audioCapitulo.duration) * 100;
        progressBar.style.width = percentualConcluido + '%';
    })

    progressBar.addEventListener('click', (event) => {
        const larguraTotal = progressBar.clientWidth;
        const clickX = event.offsetX;
        const novoTempo = (clickX / larguraTotal) * audioCapitulo.duration;

        audioCapitulo.currentTime = novoTempo;
    });
    
    /*progressBar.addEventListener('click', (event) => {
        const larguraTotal = progressBar.clientWidth;
        const x = event.offsetX;
        const novoTempo = (x / larguraTotal) * audioCapitulo.duration;
        audioCapitulo.currentTime = novoTempo;
    })*/

    /*audioCapitulo.addEventListener('timeupdate', () => {
        const percentualConcluido = (audioCapitulo.currentTime / audioCapitulo.duration) * 100;
        progressBar.style.width = percentualConcluido + '%';
    });*/


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



//})