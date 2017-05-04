function setup() {
    createCanvas(400, 400);
}

function draw() {
  background(255, 0, 0);
  ellipse(300, 300, 50, 50);
  ellipse(100, 100, 50, 70, 30);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN)
  arc(50, 55, 80, 80, 0, PI + QUARTER_PI, OPEN)
  arc(55, 55, 80, 80, 0, PI + QUARTER_PI, OPEN)
  arc(55, 80, 80, 80, 0, PI + QUARTER_PI, OPEN)
} 