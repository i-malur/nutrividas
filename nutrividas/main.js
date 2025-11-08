// Game configuration object 
let config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 450,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Scene7, Scene8, Scene9, Scene10, Scene11, Scene12],
  parent: "phaser-div",
  dom: {
    createContainer: true
  },
  fontFamily: `Arial`,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    }
  }
};

//global data object
let data = {
  //score: 0,
  //lives: 3,
  //health 100,
}


//Create a Phaser Game using the config
const game = new Phaser.Game(config);

