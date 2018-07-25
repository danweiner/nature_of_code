//var x, y;

function setup() {
	createCanvas(400, 400);
	// x = width/2;
	// y = height/2;
}

function draw() {
	// var num1 = randomGaussian();
	// var num2 = randomGaussian();

	// x += num1;
	// y += num2;

	// point(x, y, 10);

	// x = constrain(x, 0, width - 1);
	// y = constrain(y, 0, height - 1);

	var xloc = randomGaussian();
	var yloc = randomGaussian();

	var sd = width/10;
	var mean = width/2;
	xloc = (xloc * sd) + mean;
	yloc = (yloc * sd) + mean;

	ellipse(xloc, yloc, 10);
}