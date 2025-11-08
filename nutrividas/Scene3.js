  class Scene3 extends SimpleScene {
  constructor() {
    super("Scene3");
    // this.balao5 = false;
  }

  init() {

  }

  preload() {
    //fundo da comunidade
    this.load.image("background1", "assets/background1.jpg");
    //Carla
    this.load.image("carla5", "assets/carla5.png");

    //bruno
    this.load.image("bruno1", "assets/bruno1.png")

    //botão
    this.load.image("botao7", "assets/botao7.png");

    //balão bruno
    this.load.image("balaoBruno1", "assets/balaoBruno1.png");

    //balão carla
    this.load.image("balaoCarla", "assets/balaoCarla.png");

    //balao bruno 2
    this.load.image("balaoBruno2", "assets/balaoBruno2.png");

    //narrador
     this.load.image("narrador4", "assets/narrador4.png");
     
     //indicativo para apertar seta
    this.load.image("seta", "assets/seta.png");


  }

  create() {
    //contador
    this.counter = 0;
    //fundo da comunidade
    this.background1 = this.add.sprite(1000, 450, "background1");
    this.background1.setOrigin(1, 1);

    //carla
    this.carla5 = this.add.sprite(0, 250, "carla5", 4);
    this.carla5.setOrigin(0, 0.2);
    this.myKey = this.add.key("RIGHT");


    //bruno
    this.bruno1 = this.add.sprite(800, 230, "bruno1");
    this.bruno1.setOrigin(0.1, 0.2);
    //this.myKey = this.add.key("RIGHT");


    //balão carla
    this.balaoCarla = this.add.sprite(150, 185, "balaoCarla");
    this.balaoCarla.setOrigin(0, 0.5);
    this.balaoCarla.visible = false;

    //bruno balao 
    this.balaoBruno1 = this.add.sprite(600,200,"balaoBruno1");
    this.balaoBruno1.setOrigin(0, 0.5);
    this.balaoBruno1.visible = false;

    //balao bruno 2
    this.balaoBruno2 = this.add.sprite(600, 200, "balaoBruno2");
    this.balaoBruno2.setOrigin(0, 0.5);
    this.balaoBruno2.visible = false;

    //configurações de botão2
    this.botao7 = this.add.sprite(900, 400, "botao7");
    this.botao7.setOrigin(0.5, 0.5);
    this.botao7.enableClick();
    this.botao7.visible = false;

     //narrador
    this.narrador4 = this.add.sprite(900,60,"narrador4")

    //indicando seta
    this.seta = this.add.sprite(75,45,"seta");


    //this.drawGrid();

  }

  update() {
    //movimentação do personagem - carla
    if (this.myKey.isPressed() && this.carla5.x < 301) {
      this.carla5.x += 5;
    }

    //movimentação do personagem - bruno
    if (this.myKey.isPressed() && this.bruno1.x > 500) {
      this.bruno1.x -= 5;
    }
    //teste para habilitar o balao quando a carla chega na posição 294, que é o máximo antes de chegar em 300
    //    if (this.myKey.isPressed() && this.carla5.x == 294) {
    //    this.balaoCarla.visible=true;
    // }
    if (this.myKey.wasPressed() && this.carla5.x >= 300) {
      if (this.counter == 0) {
        this.balaoBruno1.visible = true;
      }
      else if (this.counter == 1) {
        this.balaoCarla.visible = true;
        this.balaoBruno1.visible = true;
      }
      else if (this.counter == 2) {
        this.balaoBruno1.visible = false;
        this.balaoBruno2.visible = true;
      }
      else if (this.counter == 3) {
        this.botao7.visible = true;

      }
 //     else if (this.counter == 3) {
 //       this.balaoBruno1.visible = false;
//        this.balaoBruno2.visible = true;
//      }
//Ir adicionando blocos como este acima e para alternar os baloes. Você precisa incrementar o this.counter na clausula else if, alternando o visible true/false entre os balões
      this.counter += 1; //este counter é incrementando para que aconteça a troca dos balões acima. Não precisa alterá-lo
      console.log(this.counter)
    }

    //o que acontece se o botão for clicado
    if (this.botao7.wasClicked()) {
      this.scene.start("Scene7");
    }
  }
}
