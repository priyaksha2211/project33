class Snow {
    constructor(x, y, radius, height) {
      var options = {
        isStatic: false,
        'restitution': 0.1,
        'friction': 0.001
      }
      this.rain = Bodies.circle(x, y, 15, options);
      this.x = x;
      this.y = y;
      this.height = height;
      this.radius = radius;
      this.image = loadImage("snow4.webp");
  
      World.add(world, this.rain);
    }
  
    display() {
      fill("blue");
      imageMode(CENTER);
      if (this.rain.position.y > this.height) {
        Matter.Body.setPosition(this.rain, { x: this.x, y: this.y });
      }
      image(this.image,this.rain.position.x, this.rain.position.y, this.radius, this.body);
  
    }
  
  }