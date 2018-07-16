var randomCounts = new Array(20); // array to keep track of how often 
								  // random nums are picked

function setup() {
	createCanvas(640, 240);
	for (var i = 0; i < randomCounts.length; i++) {
		randomCounts[i] = 0;
	}
}

function draw() {
	background(255);

	var index = int(random(randomCounts.length)); // pick a random num and increase count

	randomCounts[index]++;
	if (frameCount == 1000) {
		noLoop();
	}
	console.log(frameCount);
	stroke(0);
	fill(175);
	var w = width/randomCounts.length;

	for (var x = 0; x < randomCounts.length; x++) {
		rect(x*w, height-randomCounts[x], w-1, randomCounts[x]);
	}
}