var x = 50;
var y = 50;
var xspeed = 5;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background('black');
	fill('white');
	ellipse(x, 50, 50);

	x = x + xspeed;

	if (x > width || x < 0) {
		xspeed = xspeed * -1;
	}
}