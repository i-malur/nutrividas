
class Scene9 extends SimpleScene {
  constructor() {
    super("Scene9");
    
  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("over1", "assets/over1.png");

    //botao reiniciar
    this.load.image("reiniciarJogo", "assets/reiniciarJogo.png");

    //botão saiba mais
    this.load.image("botaoMais", "assets/botaoMais.png");

    this.load.audio("gameOver", "assets/sounds/gameOver.mp3");



  }

  create() {


    //Imagem de fundo
    this.background = this.add.sprite(1000,450,"over1");
    this.background.setOrigin(1,1);

    //botao reiniciar
    this.reiniciarJogo = this.add.sprite(400,300,"reiniciarJogo");
    this.reiniciarJogo.setOrigin(0,0.5);
    this.reiniciarJogo.enableClick();

     //botao saiba mais
    this.botaoMais = this.add.sprite(900,400, "botaoMais");
    this.botaoMais.enableClick();

    this.gameOver = this.sound.add("gameOver");
    this.gameOver.play();



   
    //this.drawGrid();
  }

  update() {
   
   if(this.botaoMais.wasClicked()) {
      this.scene.start("Scene11");
    }

    if(this.reiniciarJogo.wasClicked()) {
      this.scene.start("Scene1");
    }
    
  
   }


}

