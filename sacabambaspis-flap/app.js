let config = {
  renderer: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let game = new Phaser.Game(config);

// brings in images such as the background
function preload () {
    this.load.image('background', 'assets/background.png');
    this.load.image('road', 'assets/road.png');
    this.load.image('column', 'assets/column.png');
    this.load.spritesheet('fish', 'assets/fish.png', { frameWidth: 64, frameHeight: 96 });

}
// generates sprites that are used in-game
function create () {
    const background = this.add.image(0, 0, 'background').setOrigin(0, 0);
}
// updates sprites used while in-game
function update () {
}
