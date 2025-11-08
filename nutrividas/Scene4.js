  class Scene4 extends SimpleScene {
  constructor() {
    super("Scene4");
    
  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("background6scena4", "assets/background6scena4.png");

    //botão
    this.load.image("botao7", "assets/botao7.png");

    //narrador2
    this.load.image("narrador2", "assets/narrador2.png");
    
    //carla
    this.load.image("carla1", "assets/carla1.png");

    //ana (filha da carla)
    this.load.image("ana2", "assets/ana2.png");

    //balao
    this.load.image("balaoFala2", "assets/balaoFala2.png");

  }

  create() {
    //Imagem de fundo
      this.background6scena4 = this.add.sprite(1000,450,"background6scena4");
      this.background6scena4.setOrigin(1,1);
    
    //configurações de botão2
    this.botao7 = this.add.sprite(900,400, "botao7");
    this.botao7.setOrigin(0.5,0.5);
    this.botao7.enableClick();

     //configurações de imagem carla
    this.carla1= this.add.sprite(250,250, "carla1");
    this.carla1.setOrigin(0,0.5);

    //configurações de imagem ana
    this.ana2 = this.add.sprite(500,470,"ana2");
    this.ana2.setOrigin(0,1);

    //narrador
    this.narrador2 = this.add.sprite(150,85,"narrador2");

    //balaofala
    this.balaoFala2 = this.add.sprite(550,100,"balaoFala2");
    this.balaoFala2.setOrigin(0.5,0.5);

    //this.drawGrid();
    

  }
  update() {
    //o que acontece se o botão for clicado
      if (this.botao7.wasClicked()) {
      this.scene.start("Scene5");
   }




  }
}