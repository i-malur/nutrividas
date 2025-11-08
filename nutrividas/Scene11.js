class Scene11 extends SimpleScene {
  constructor() {
    super("Scene11");
    
  }

  init() {

  }

  preload() {
    //imagem de fundo
    this.load.image("fundoFinal5", "assets/fundoFinal5.png");

    //botao reiniciar
    this.load.image("reiniciarJogo", "assets/reiniciarJogo.png");

    //botão saiba mais
    this.load.image("botaoMais", "assets/botaoMais.png");
  }

  create() {


    //Imagem de fundo
    this.background = this.add.sprite(1000,450,"fundoFinal5");
    this.background.setOrigin(1,1);

    //botao reiniciar
    this.reiniciarJogo = this.add.sprite(50,400,"reiniciarJogo");
    this.reiniciarJogo.setOrigin(0,0.5);
    this.reiniciarJogo.enableClick();


    
    


   
   // this.drawGrid();
  }

  update() {
   

    if(this.reiniciarJogo.wasClicked()) {
      this.scene.start("Scene1");
    }
    
  
   }


}

