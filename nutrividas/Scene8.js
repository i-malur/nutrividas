class Scene8 extends SimpleScene {
  constructor() {
    super("Scene8");
    
  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("propostaJulio", "assets/propostaJulio.png");
    this.load.image("aceitar", "assets/aceitar.png");

    this.load.image("naoAceitar1", "assets/naoAceitar1.png");
  }

  create() {


    //Imagem de fundo
    this.background = this.add.sprite(1000,450,"propostaJulio");
    this.background.setOrigin(1,1);

    this.aceitar = this.add.sprite(300,250, "aceitar");
    this.aceitar.setOrigin(0.5,0.5);
    this.aceitar.enableClick();
     
    this.naoAceitar1 = this.add.sprite(700,250, "naoAceitar1");
    this.naoAceitar1.setOrigin(0.5,0.5);
    this.naoAceitar1.enableClick();

    //this.drawGrid();
  }
  update() {
    if(this.aceitar.wasClicked()) {
      this.scene.start("Scene6");}

    if(this.naoAceitar1.wasClicked()) {
      this.scene.start("Scene10");
    }
    
  
   }
}



  
