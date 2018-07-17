function setup() {
	createCanvas(800, 640);
	background('white');
	noStroke();
	fill('red');
}

function draw() {
	line(0, height/2, width/2, height/2);
	for (var x = 0; x < width; x += 1) {
		var y = sin(x/100) * 100;
		//console.log(y);
		ellipse(x, height/2 + y, 2);
	}
}