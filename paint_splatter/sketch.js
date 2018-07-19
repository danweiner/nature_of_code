function setup() {
	createCanvas(640, 360);
	//noLoop();
	background(255);
}

function draw() {
	var num1 = randomGaussian();
	var mean1 = 320;
	console.log(num1);

	var num2 = randomGaussian();
	var mean2 = 180;
	
	var sd = 100;
	var x = sd * num1 + mean1;
	var y = sd * num2 + mean2;
	console.log(x, y);

	noStroke();
	fill(100, 10);
	ellipse(x, y, 16, 16);
}