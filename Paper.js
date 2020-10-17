class Paper {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      
      this.body = Bodies.circle(x, y, 30, options);
      World.add(world, this.body);
      
    }
    display(){
        ellipseMode(CENTER);
      var pos =this.body.position;
      ellipse(pos.x, pos.y, 30);
    }
  }