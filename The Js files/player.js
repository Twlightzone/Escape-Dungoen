class playerS {
    constructor(x, y, w, h) {
      let options={
        restitution: 1,
    frictionAir:0.01,
    friction:1,
  }
  
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  this.image = loadImage("./Assets/Player.png");

  World.add(world, this.body);
}

show() {
  var pos = this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.w, this.h);
  pop();
}
}