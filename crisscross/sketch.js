let walker;

function setup() {
  createCanvas(800, 800);
  walker = new Walker(150,400,400,0,0.01,200,200,0.021,0,0);
  background(0);
}

function draw() {
  walker.update();
  walker.translate();
  walker.show();
}
