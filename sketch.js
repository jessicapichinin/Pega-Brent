//variaveis
let vImagemFundo;
let musicas = [];
let imgAlbuns = [];
let vjogador;
let contador = 0;
let imgAbertura;
let controleTela = "INICIO";
let imgGameOver;
let vidas = 0;

//carrega as imagens
//as imagens são albuns de música, por isso que um estão com fundo
function preload(){
  imgGameOver = loadImage('jogo/imgJogo/gameover.png')
  imgAbertura = loadImage('jogo/imgJogo/abertura.gif')

  vImagemFundo = loadImage('jogo/imgJogo/fundo_studio.png');
  imgAlbuns[0] = loadImage('jogo/imgJogo/deadmanwalking_brent.png');
  imgAlbuns[1] = loadImage('jogo/imgJogo/fucktheworld_brent.png');
  imgAlbuns[2] = loadImage('jogo/imgJogo/brent_faiyaz.png');
  imgAlbuns[3] = loadImage('jogo/imgJogo/bomba.png');

  musicas[0] = new Albuns(random(10, 570));
  musicas[1] = new Albuns(random(10, 570));
  musicas[2] = new Albuns(random(10, 570));
  musicas[3] = new Albuns(random(10, 570));
  
  vjogador = new Jogador();
}

//delimita o fundo
function setup(){
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
  if(keyCode == 32)
    controleTela = "jogo";
}

//"faz o jogo acontecer"
function draw(){
  if (controleTela == "INICIO"){
    MostraAbertura();
  } else{
    executarJogo();
  } if(controleTela == "Gameover"){
    GameOver();
  }
}