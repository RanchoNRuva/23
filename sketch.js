var packageIMG;


function preload() {
	var packageIMG = loadImage("package.png");
}
function setup() {
	createCanvas(600, 600);
	packageSprite = createSprite(300, 300);
	packageSprite.addImage(packageIMG);
	packageSprite.velocityY = 1;
}
function draw() {
	packageSprite.addImage(packageImg);
	drawSprites();
}
