class Dancer {
  constructor(x,y,d,s,a) {
    this.speed = s;
    this.angle = a;
    this.pos = createVector(x,y);
    this.cx = x;
    this.cy = y;
    this.d = d
  }

  transform() {
    this.pos.x = (this.cx + (this.d)*cos(this.angle))
    this.pos.y = (this.cy+(this.d)*sin(this.angle))
    this.angle = this.angle + this.speed

    if (this.pos.x<this.cx-this.d) {
      this.pos.set(this.cx-this.d, this.pos.y)
    } else if (this.pos.x>this.cx+this.d) {
      this.pos.set(this.cx+this.d, this.pos.y)
    }

    if (this.pos.y<this.cy-this.d) {
      this.pos.set(this.pos.x, this.cy-this.d)
    } else if (this.pos.y>this.cy+this.d) {
      this.pos.set(this.pos.x, this.cy+this.d)
    }
  }

  illuminate() {
    let a = (this.pos.x-this.cx+this.d)*(this.cy+this.d-this.pos.y)
    let c = color(a/3,a/10,255)
    noStroke()
    fill(0)
    rect(this.cx-this.d, this.pos.y, this.pos.x-this.cx+this.d, this.cy+this.d-this.pos.y);

    a = (this.cx+this.d-this.pos.x)*(this.pos.y-this.cy+this.d)
    c = color(255,a/2,a/1.9)
    fill(c)
    rect(this.pos.x, this.cy-this.d, this.cx+this.d-this.pos.x, this.pos.y-this.cy+this.d);

    a = (this.pos.x-this.cx+this.d)*(this.pos.y-this.cy+this.d)
    c = color(a/6,a/10,a/2)
    fill(0)
    rect(this.cx-this.d, this.cy-this.d, this.pos.x-this.cx+this.d, this.pos.y-this.cy+this.d);

    a = (this.cx+this.d-this.pos.x)*(this.cy-this.pos.y+this.d)
    c = color(a/5,a/2,255)
    fill(c)
    rect(this.pos.x, this.pos.y, this.cx+this.d-this.pos.x, this.cy-this.pos.y+this.d);
  }
}
