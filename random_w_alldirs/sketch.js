var w;

function setup() {
	createCanvas(640, 360);
	w = new Walker();
	background(255);
	frameRate(100);
}

function draw() {
	w.step();
	w.display();
	//console.log(w);

}

class Walker {
	constructor(x, y) {
		this.x = width/2;
		this.y = height/2;
	}

	display() {
		stroke(0);
		point(this.x, this.y);
	}

	step() {
		var stepx = random(-1, 1);
		var stepy = random(-1, 1);
		//console.log(stepx);
		//console.log(stepy);

		this.x += stepx;
		this.y += stepy;
	}
}