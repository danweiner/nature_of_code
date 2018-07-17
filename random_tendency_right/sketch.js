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
		var choice = random(1); // decimal value between 0 and 1
		//console.log(choice);
		if (choice < 0.26) {
			this.x++;
		} else if (choice < 0.5) {
			this.x--;
		} else if (choice < 0.76) {
			this.y++;
		} else {
			this.y--;
		}
	}
}