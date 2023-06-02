//classe que cria jogador 
class Jogador{
    constructor(){
      //imagem do jogador
      this.img = loadImage('jogo/imgJogo/littlebrent.png');
      //posicao do jogador
      this.posicaox = 250;
      this.posicaoy = 275;
      //velocidade que o jogador se move
      this.velocidade = 5;
      //altura e largura do jogador
      this.largura = 110;
      this.altura = 130;
      
      //delimita o X e o Y
      this.yInicial = this.posicaoy;
      this.yFinal = this.posicaoy + this.altura;
      this.xInicial = this.posicaox;
      this.xFinal = this.posicaox + this.largura;
    }
    
    //faz o jogador se mexer
    mova(){
      image(this.img, this.posicaox, this.posicaoy, this.largura, this.altura);
      
        //pra direita
        if((keyIsDown(39)) && (this.xFinal < 630)){
          this.posicaox += this.velocidade;
        }
        //pra esquerda
        if((keyIsDown(37)) && (this.xInicial > -30)){
          this.posicaox -= this.velocidade;
        }
  
        this.xInicial = this.posicaox;
        this.xFinal = this.posicaox + this.largura;
    }
  }