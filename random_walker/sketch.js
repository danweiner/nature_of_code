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
		var choice = int(random(4)); // 0, 1, 2 or 3
		//console.log(choice);
		if (choice == 0) {
			this.x++;
		} else if (choice == 1) {
			this.x--;
		} else if (choice == 2) {
			this.y++;
		} else {
			this.y--;
		}
	}
}