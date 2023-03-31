export default function controlador_play(){
    var reproduzir = document.querySelector('audio');
    var botao_play = document.querySelector('#play');
    
    /*play */
    function repoduzir_musica(evento){
      evento.preventDefault();
      reproduzir.play();
      console.log()
      
    }
    botao_play.addEventListener('click',repoduzir_musica);



    /*pause*/ 
    var botao_pause = document.querySelector('#pause');

    
    function repoduzir_pause(evento){
        evento.preventDefault();
        reproduzir.pause();
        
        
      }
      botao_pause.addEventListener('click',repoduzir_pause);

    



      /*mudo */
      var botao_mudo = document.querySelector('#mudo');

      function repoduzir_mudo(evento){
        evento.preventDefault();
        reproduzir.muted = true;
        
        
      }
      botao_mudo.addEventListener('click',repoduzir_mudo);





      /*aumenta */

      var botao_aumenta = document.querySelector('#aumentar');

      var contador = parseFloat(reproduzir.volume);

      function repoduzir_aumentar(evento){
        
        evento.preventDefault();
            if(contador<1){
            contador = contador + 0.1;
            console.log(contador);
            reproduzir.volume = contador;

            
            }
            reproduzir.muted = false;
            
      
      }


      botao_aumenta.addEventListener('click',repoduzir_aumentar);









      /*diminuir */

      var botao_diminuir = document.querySelector('#diminuir');

      function repoduzir_diminuir(evento){
        
        evento.preventDefault();

            if(contador<=1 && contador>=-0.1){
            contador = contador - 0.1;
            console.log(contador);
            reproduzir.volume = contador;

            
            }
            reproduzir.muted = false;
      
      }


      botao_diminuir.addEventListener('click',repoduzir_diminuir);
}
