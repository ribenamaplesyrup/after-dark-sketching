// function project(per, a, b, x, y, l) {
//   if (per < 0.25) {
//     a = x+(per*l/0.25)-l/2
//     b = y-(l/2)
//
//   }
//   else if (per > 0.25 && per < 0.5) {
//     a = x+(l/2)
//     b = y-l/2+((per-0.25)*l/0.25)
//
//   }
//   else if (per > 0.5 && per < 0.75) {
//     a = x+(l/2)-(l*(per-0.5)/0.25)
//     b = y+l/2
//
//   }
//   else if (per > 0.75 && per < 1) {
//     a = x-l/2
//     b = y+l/2-((per-0.75)*l/0.25)
//   }
// }

let l = 500;
class Walker {
  constructor(w,x,y,p,v,a,b,o,c,d) {
    this.per = p;
    this.vel = v;
    this.x = x;
    this.y = y;
    this.pos = createVector(a,b)

    this.per2 = p;
    this.vel2 = o;
    this.x2 = x;
    this.y2 = y;
    this.pos2 = createVector(c,d)

  }

  translate() {
    if (this.per < 0.25) {
      this.a = this.x+(this.per*l/0.25)-l/2
      this.b = this.y-(l/2)
    }

    if (this.per2 < 0.25) {
      this.c = this.x2+(this.per2*l/0.25)-l/2
      this.d = this.y2-(l/2)
    }

    if (this.per > 0.25 && this.per < 0.5) {
      this.a = this.x+(l/2)
      this.b = this.y-l/2+((this.per-0.25)*l/0.25)
    }

    if (this.per2 > 0.25 && this.per2 < 0.5) {
      this.c = this.x2+(l/2)
      this.d = this.y2-l/2+((this.per2-0.25)*l/0.25)
    }

    if (this.per > 0.5 && this.per < 0.75) {
      this.a = this.x+(l/2)-(l*(this.per-0.5)/0.25)
      this.b = this.y+l/2
    }

    if (this.per2 > 0.5 && this.per2 < 0.75) {
      this.c = this.x2+(l/2)-(l*(this.per2-0.5)/0.25)
      this.d = this.y2+l/2
    }

    if (this.per > 0.75 && this.per < 1) {
      this.a = this.x-l/2
      this.b = this.y+l/2-((this.per-0.75)*l/0.25)
    }

    if (this.per2 > 0.75 && this.per2 < 1) {
      this.c = this.x2-l/2
      this.d = this.y2+l/2-((this.per2-0.75)*l/0.25)
    }

  }

  // translate() {
  //   project(this.per, this.a, this.b, this.x, this.y, this.l)
  //   // translate(per, a, b, x, y, l)
  //
  // }

  update() {
    this.per = this.per + this.vel;
    this.per2 = this.per2 + this.vel2;
    if (this.per > 1) {
      this.per = 0;
    }
    if (this.per2 > 1) {
      this.per2 = 0;
    }
  }

  show() {
    stroke(255,5);
    strokeWeight(1);
    fill(0,0,0);
    // ellipse(this.a, this.b, 3);
    // ellipse(this.c, this.d, 6);
    line(this.a,this.b, this.x,this.d)
  }
}
