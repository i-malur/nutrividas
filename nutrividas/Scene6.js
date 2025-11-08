class Scene6 extends SimpleScene {
  constructor() {
    super("Scene6");
    
  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("background", "assets/background.png");

    //carla 
    this.load.image("carlafuturo1", "assets/carlafuturo1.png");

    
    //botão
    this.load.image("botao7", "assets/botao7.png");

    //narrador3
    this.load.image("narrador3", "assets/narrador3.png");
    
    //balão 1 julio
    this.load.image("balaocarlaFuturo", "assets/balaocarlaFuturo.png");

    
    this.load.audio("emicida", "assets/sounds/emicida.mp3");
    
  }

  create() {


    //Imagem de fundo
      this.background10 = this.add.sprite(1000,450,"background");
      this.background10.setOrigin(1,1);

    //carla
      this.carlafuturo1= this.add.sprite(300,250, "carlafuturo1");
      this.carlafuturo1.setOrigin(0,0.5);

    //configurações de botão2
    this.botao7 = this.add.sprite(900,400, "botao7");
    this.botao7.setOrigin(0.5,0.5);
    this.botao7.enableClick();
    
    //narrador
    this.narrador3 = this.add.sprite(890,70,"narrador3");


    //carla balão
      this.carlaCena5= this.add.sprite(470,120, "balaocarlaFuturo");
      this.carlaCena5.setOrigin(0,0.5);

    this.emicida = this.sound.add("emicida");
    this.emicida.play();
     
    //this.drawGrid();
  }
  update() {
    
      
      //o que acontece se o botão for clicado
      if (this.botao7.wasClicked()) {
   //   this.emicida.stop();
      this.scene.start("Scene12");
      this.emicida.stop();
   }




  }
}