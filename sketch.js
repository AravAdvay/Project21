var wall;
var bullet, bulletSpeed, bulletWeight, thickness ;
var neumerator,denominator;
var damage;

function setup () {
createCanvas (1600,400); 

wall=createSprite(1200,200, thickness,200);
wall.shapeColor=(80,80,80);

bulletSpeed=random(223,321);
bulletWeight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50,200, 80,30);
bullet.shapeColor='white';
bullet.velocityX=bulletSpeed

neumerator = 0.5*bulletWeight*bulletSpeed*bulletSpeed
denominator = thickness*thickness*thickness

damage = neumerator/denominator;

}

function draw() {


if (bullet.x - wall.x < wall.width/2+ bullet.width/2 && wall.x - bullet.x < wall.width/2+bullet.width/2) {

bullet.velocityX=0;

if (damage>10) {
wall.shapeColor='red'
}

if (damage<10) {
wall.shapeColor='green'
}
}

background(0); 
drawSprites();

text("Speed: "+ bulletSpeed,18,50,fill("white"));
text("weight: "+ bulletWeight,18,35,fill("white"));
text("damage: "+ damage,18,20,fill("white"));
text("thickness: "+ thickness,18,65,fill("white"));
}
