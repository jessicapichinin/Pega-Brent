//classe para as imagens que se movem
class Albuns{
    constructor(parametroy){
      //as imagens dos albuns vai ser escolhidas aleatoriamente
      this.img = imgAlbuns[int(random(0,4))];
      
      //o X estava começando fora do canva por isso não estava aparecendo, então mudei a posicaox para 0.
      this.posicaox = -10;
      this.posicaoy = random(30, 550);
      //"random" faz a velocidade ser escolhida aleatoriamente
      this.velocidade = random(1,2 + contador);
      this.largura = 40;
      this.altura = 35;
      this.yInicial = this.posicaoy + this.altura;
      this.yFinal = this.posicaoy;
      this.xInicial = this.posicaox + this.largura;
      this.xFinal = this.posicaox;
    }
    
    //faz os objetos se mexerem
     mova(){
      this.posicaox += this.velocidade;
      image(this.img, this.posicaoy, this.posicaox, this.largura, this.altura);
      this.yInicial = this.posicaoy;
      this.yFinal = this.posicaoy + this.altura;
      this.xInicial = this.posicaox;
      this.xFinal = this.posicaox + this.largura;
    }
  }