export default function radios_noticia(){


      /*oculta os controles */
   var botao_radio_antiga = document.querySelector('.radio_antigas');
   var botao_radio_fm = document.querySelector('.radio_fm');
   var botao_radio_am = document.querySelector('.radio_am');
   var botao_radio_noticia = document.querySelector('.radio_noticias');

   var controle1 = document.querySelector('.botoes_radio_antigas');
   var controle2 = document.querySelector('.botoes_radio_fm');
   var controle3 = document.querySelector('.botoes_radio_am');
   var controle4 = document.querySelector('.botoes_radio_noticia');
   var controle5 = document.querySelector('.botoes_radio_esporte');

   function habilitar_controle(){
   
    controle1.classList.add('esconde');
    controle2.classList.add('esconde');
    controle3.classList.add('esconde');
    controle4.classList.remove('esconde');
    controle5.classList.add('esconde');
}

   botao_radio_noticia.addEventListener('click',habilitar_controle);


    var radio_noticia = {
        radio_JBFM :"https://24493.live.streamtheworld.com/JBFM.mp3",
        radio_cidade_Rock:"https://26483.live.streamtheworld.com/RADIOCIDADE.mp3",
        radio_sulamerica_paradisio_fm:"https://26643.live.streamtheworld.com/SULAMERICA.mp3",
        radio_antena_1:"https://antenaone.crossradio.com.br/stream/1",
        radio_anos_80:"https://18533.live.streamtheworld.com/T_RAD_80S_S01_SC",
        back_to_the_80:"http://s1.nexuscast.com:8135/;",
        love_90:"https://ice1.streeemer.com:8000/radio.aac",
        the_big_80s_station:"http://158.69.114.190:8065/;",
        totally_radio_90:"https://23023.live.streamtheworld.com/T_RAD_90S_S01_SC",
        totally_radio_70:"https://23023.live.streamtheworld.com/T_RAD_70S_S01_SC",
        wonder_80:"https://ice1.streeemer.com:8010/radio.aac",
    }
    
    var nome_estacao_radio = Object.keys(radio_noticia);
    var frenquencia_radio_noticia = Object.values(radio_noticia);
 
    
    
    
    var sintonizacao_radio_noticia = document.querySelector('#texto_radio_noticia');
    
    
    
    function muda_estacao(){
        var canal_radio_noticia = document.querySelector('audio').src = frenquencia_radio_noticia[sintonizacao_radio_noticia.value];
     
       
        /*nome da radio*/
        var nome_radio_noticia = document.querySelector('#nome_radio_noticia');
        
        
        nome_radio_noticia.value = nome_estacao_radio[sintonizacao_radio_noticia.value];
       
    
    }
    
    
    
    sintonizacao_radio_noticia.addEventListener('click',muda_estacao);

}



