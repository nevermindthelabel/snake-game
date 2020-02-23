export default class Snake {
  constructor(scene) {
    this.scene = scene;
    this.body = [];
    this.body.push(this.scene.add.rectangle(0, 0, 16, 16, 0xff0000).setOrigin(0));
    this.body.push(this.scene.add.rectangle(0, 0, 16, 16, 0x0000ff).setOrigin(0));
    scene.input.keyboard.on('keydown', e => { this.keydown(e)})
  }

  keydown(event) {
    console.log(event)
    switch(event.keyCode) {
      case 37: // left
      break
      case 38: // up
      break
      case 39: // right
      break
      case 40: // down
      break
    }
  }

  update(time) {
    this.body[0].x += 1;
  }
}
