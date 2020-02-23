export default class Snake {
  constructor(scene) {
    this.scene = scene;
    this.lastMoveTime = 0;
    this.moveInterval = 1000;
    this.tileSize = 16;
    this.direction = Phaser.Math.Vector2.RIGHT;
    this.body = [];
    this.body.push(this.scene.add.rectangle(0, 0, this.tileSize, this.tileSize, 0xff0000).setOrigin(0));
    scene.input.keyboard.on('keydown', e => { this.keydown(e) });
    this.apple = this.scene.add.rectangle(0, 0, this.tileSize, this.tileSize, 0x00ff00).setOrigin(0);
  }

  keydown(event) {
    console.log(event)
    switch (event.keyCode) {
      case 37: // left
        this.direction = Phaser.Math.Vector2.LEFT;
        break
      case 38: // up
        this.direction = Phaser.Math.Vector2.UP;
        break
      case 39: // right
        this.direction = Phaser.Math.Vector2.RIGHT;
        break
      case 40: // down
        this.direction = Phaser.Math.Vector2.DOWN;
        break
    }
  }

  update(time) {
    if (time >= this.lastMoveTime + this.moveInterval) {
      this.lastMoveTime = time;
      this.move();
    }
  }
  move() {
    for (let i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    }
    this.body[0].x += this.direction.x * 16;
    this.body[0].y += this.direction.y * 16;
  }
}
