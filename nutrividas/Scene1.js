class Scene1 extends SimpleScene {
  constructor() {
    super("Scene1");
  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("cidade1", "assets/cidade1.png");
    //botão start
    this.load.image("botaoStart", "assets/botaoStart.png");
    //logotipo Nutrividas
    this.load.image("nutriLogo", "assets/nutriLogo.png");

    
    

  }

  create() {
    //Imagem de fundo
    this.cidade1 = this.add.sprite(1000, 450, "cidade1");
    this.cidade1.setOrigin(1, 1);

    //texto
    this.nutriLogo = this.add.sprite(280, 100, "nutriLogo");
    this.nutriLogo.setOrigin(0, 0.5);

    //configurações do botão 
    this.botaoStart = this.add.sprite(350, 250, "botaoStart");
    this.botaoStart.setOrigin(0, 0.5);
    this.botaoStart.enableClick();

    



    //  this.drawGrid();
  }

  update() {
    // o que acontece se clicar no botão "start"
    if (this.botaoStart.wasClicked()) {
      this.scene.start("Scene2");

    }
    
 //   if (this.botaoMais.wasClicked()) {
 //     this.scene.start("Scene11");

 //   }


  }
}