
function setup() {
var myCanvas= createCanvas(800, 250);

 frameRate(8);
 noStroke();
 background(201, 238, 255);
// img = loadImage("images/header.jpg");
myCanvas.parent(mySketch);


}
  
function draw() {
  if(mouseIsPressed) {
    fill(255);
  } 
    var circSize = 5;
  ellipse(mouseX, mouseY, circSize, circSize);
}

