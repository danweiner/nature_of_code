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
		var choice = random(1); // decimal < 1
		console.log(choice);
		if (mouseX > this.x && mouseY > this.y) {
			if (choice < 0.5) {
				this.x++;
				this.y++;
			}
		} else if (mouseX < this.x && mouseY > this.y) {
			if (choice < 0.5) {
				this.x--;
				this.y++;
			}
		} else if (mouseX > this.x && mouseY < this.y) {
			if (choice < 0.5) {
				this.x++;
				this.y--;
			}
		} else if (mouseX < this.x && mouseY < this.y) {
			if (choice < 0.5) {
				this.x--;
				this.y--;
			}
		} else if (mouseY > this.y) {
			if (choice < 0.5) {
				this.y++;
			}
		} else if (mouseY < this.y) {
			if (choice < 0.5) {
				this.y--;
			}
		} else if (mouseX < this.x) {
			if (choice < 0.5) {
				this.x--;
			}
		} else if (mouseX > this.x) {
			if (choice < 0.5) {
				this.x++;
			}
		
		}
	}
}