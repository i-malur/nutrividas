class Scene12 extends SimpleScene {
  constructor() {
    super("Scene12");

  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("finalJogo", "assets/finalJogo.png");

    //botao reiniciar
    this.load.image("reiniciarJogo", "assets/reiniciarJogo.png");

    //botão saiba mais
    this.load.image("botaoMais", "assets/botaoMais.png");
    this.load.audio("venceu", "assets/sounds/venceu.mp3");

  }

  create() {


    //Imagem de fundo
    this.background = this.add.sprite(1000, 450, "finalJogo");
    this.background.setOrigin(1, 1);

    //botao reiniciar
    this.reiniciarJogo = this.add.sprite(800,400, "reiniciarJogo");
    this.reiniciarJogo.setOrigin(0, 0.5);
    this.reiniciarJogo.enableClick();   

   //botão saiba mais
    this.botaoMais = this.add.sprite(100,55, "botaoMais");
    this.botaoMais.enableClick();

    this.venceu = this.sound.add("venceu");
    this.venceu.play();

    //this.drawGrid();
  }

  update() {
    if(this.botaoMais.wasClicked()) {
      this.scene.start("Scene11");
      this.venceu.stop();
    }

    if (this.reiniciarJogo.wasClicked()) {
      this.scene.start("Scene1");
      this.venceu.stop();
    }


  }
}