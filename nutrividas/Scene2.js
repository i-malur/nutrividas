class Scene2 extends SimpleScene {
  constructor() {
    super("Scene2");
  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("background6", "assets/background6.png");

    //carla
    this.load.image("carla1", "assets/carla1.png");

    //ana (filha da carla)
    this.load.image("ana2", "assets/ana2.png");

    //botão continue
    this.load.image("botao7", "assets/botao7.png");

    //narrador
    this.load.image("narrador1", "assets/narrador1.png");
    
    //balaoFala
    this.load.image("balaoFala6", "assets/balaoFala6.png");

    
  }

  create() {
    //Imagem de fundo
    this.background6 = this.add.sprite(1000,450,"background6");
    this.background6.setOrigin(1,1);
    
    //configurações de imagem carla
    this.carla1= this.add.sprite(250,250, "carla1");
    this.carla1.setOrigin(0,0.5);

    //configurações de imagem ana
    this.ana2 = this.add.sprite(500,470,"ana2");
    this.ana2.setOrigin(0,1);
    
    //configurações de botão2
    this.botao7 = this.add.sprite(900,400, "botao7");
    this.botao7.setOrigin(0.5,0.5);
    this.botao7.enableClick();
    

    //balaofala
    this.balaoFala6 = this.add.sprite(550,100,"balaoFala6");
    this.balaoFala6.setOrigin(0.5,0.5);

    //narrador
    this.narrador1 = this.add.sprite(150,85,"narrador1");


    

    //this.drawGrid();
  }

  update() {
    if(this.botao7.wasClicked()) {
      this.scene.start("Scene3");
      
    }
 
    }
  }
