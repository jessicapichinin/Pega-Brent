function executarJogo(){
    
    background(vImagemFundo);
    
    vjogador.mova();
    for(let i = 0; i < musicas.length; i++){
      musicas[i].mova();
      if (musicas[i].posicaox > 600){
        musicas[i] = new Albuns(musicas[i].posicaoy);
      }
      
      //codigo para detectar colisao
      if (vjogador.yInicial < musicas[i].xFinal &&
          vjogador.yFinal > musicas[i].xInicial &&
          vjogador.xInicial < musicas[i].yFinal &&
          vjogador.xFinal > musicas[i].yInicial){
        
      //codigo para oq fazer quando existir colisao com a bomba
          if (musicas[i].img == imgAlbuns[3]){
            musicas[i] = new Albuns(musicas[i].posicaox);
            contador = 0;
            vidas ++;

            if(vidas == 3){
              controleTela = "Gameover";
              contador = 0;
              vidas = 0;
              vjogador = new Jogador();
            }
            
  
      //codigo para oq fazer quando existir colisao com os itens
          } else {
              musicas[i] = new Albuns();
              musicas[i].velocidade += 0,2;
              contador ++;
          } 
      }
        //pontos    
          textSize(13);
          text("Pontos: " + contador , 39, 45);
          text("Bombas: " + vidas , 487, 45);

    }
}