class Scene5 extends SimpleScene {
  constructor() {
    super("Scene5");

  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("background10", "assets/background10.png");

    //carla 
    this.load.image("carlaFormal3", "assets/carlaFormal3.png");

    //julio
    this.load.image("julio", "assets/julio.png");

    //botão
    this.load.image("botao7", "assets/botao7.png");

    //narrador3
    this.load.image("narrador9", "assets/narrador9.png");

    //balão 1 julio
    this.load.image("balaoJulio1", "assets/balaoJulio1.png");

    //balão2
    this.load.image("balaoJulio5", "assets/balaoJulio5.png");

    //balão Carla
    this.load.image("carlaCena5", "assets/carlaCena5.png");

    //indicativo para apertar seta
    this.load.image("seta", "assets/seta.png");



  }

  create() {

    //contador
    this.counter = 0;
    this.myKey = this.add.key("RIGHT");

    //Imagem de fundo
    this.background10 = this.add.sprite(1000, 450, "background10");
    this.background10.setOrigin(1, 1);

    //carla
    this.carlaFormal3 = this.add.sprite(300, 250, "carlaFormal3");
    this.carlaFormal3.setOrigin(0, 0.5);

    //julio
    this.julio = this.add.sprite(400, 250, "julio");
    this.julio.setOrigin(0, 0.5);

    //configurações de botão2
    this.botao7 = this.add.sprite(900, 400, "botao7");
    this.botao7.setOrigin(0.5, 0.5);
    this.botao7.enableClick();
    this.botao7.visible = false;

    //narrador
    this.narrador9 = this.add.sprite(890, 70, "narrador9");
    this.narrador9.visible = false;

    //balao julio 1
    this.balaoJulio1 = this.add.sprite(550, 70, "balaoJulio1");
    this.balaoJulio1.setOrigin(0, 0.5);
    this.balaoJulio1.visible = false;


    //balao julio 2
    this.balaoJulio5 = this.add.sprite(550, 100, "balaoJulio5");
    this.balaoJulio5.setOrigin(0, 0.5);
    this.balaoJulio5.visible = false;

    //carla balão
    this.carlaCena5 = this.add.sprite(80, 150, "carlaCena5");
    this.carlaCena5.setOrigin(0, 0.5);
    this.carlaCena5.visible = false;

    //indicativo de seta
    this.seta = this.add.sprite(100, 400, "seta");

    //this.drawGrid();
  }
  update() {
    // HEEEEELP!!!!!!!!

      if (this.myKey.wasPressed()) {
      if (this.counter == 0) {
        this.narrador9.visible = true;
      }
      else if (this.counter == 1) {
        this.narrador9.visible = false;
        this.carlaCena5.visible = true;
      }
      else if (this.counter == 2) {
        this.carlaCena5.visible = false;
        this.balaoJulio1.visible = true;
      }
       else if (this.counter == 3) {
        this.balaoJulio1.visible = false;
      }   
       else if (this.counter == 4 ) {
        this.balaoJulio5.visible = true;
        this.botao7.visible = true;
      }   
      
      this.counter += 1;
      console.log(this.counter);
    }
    //o que acontece se o botão for clicado
    if (this.botao7.wasClicked()) {
      this.scene.start("Scene8");
    }

  }
}