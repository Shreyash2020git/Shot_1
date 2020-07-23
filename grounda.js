class Grounda {
    constructor(x,y,width,height) {
      var options = {
        restitution :0.0001,
        friction:100
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(random(10,200),random(10,200),0);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };