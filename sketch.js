/*
	Simple image display example
	by Scott Kildall

	Displays an image, centered.

	* Use to show how to launch a localhost from terminal/command prompt
	* Shows preload() command
	* Shows use of subdirectories
	
*/


var img = []; 
var simpleTimer;

function preload() {
  img[0] = loadImage('assets/fostersFreezeOne.jpg'); 
  img[1] = loadImage('assets/fostersFreezeTwo.jpg');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);
	background(0);
	frameRate(500);

  resetTimer();

	simpleTimer = new Timer(1000);
	simpleTimer.start();
}


function draw() {

  	image(img[0], windowWidth/2, windowHeight/2);
  	updateTimer();
  }
  
// Looks for elapsed time
function updateTimer() {
  if( simpleTimer.expired() ) {
  	image(img[1], windowWidth/2, windowHeight/2);
    frameRate(1);
    resetTimer();
  }
}

//resets timer
function resetTimer(){
  simpleTimer = new Timer(500);
  simpleTimer.start();
}





