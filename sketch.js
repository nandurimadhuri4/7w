
var girl1,girl
function preload()
{
 girl1 = loadImage("clipart271286.png")
 bg1 = loadImage("Screenshot 2021-04-01 143935.png")
 bg2 = loadImage("Screenshot 2021-04-01 144000.png")
 bg3 = loadImage("Screenshot 2021-04-01 144103.png")
 bg4 =loadImage("Screenshot 2021-04-01 144228.png")
 bg5 = loadImage("Screenshot 2021-04-01 144256.png")
 bg6 = loadImage("Screenshot 2021-04-01 144407.png")
 bg7 = loadImage("Screenshot 2021-04-01 144543.png")
}

function setup() {
	createCanvas(1000, 625);
	bg = createSprite(500,340,20,20);
    bg.addImage(bg1);
	bg.scale = 2
	bgA = createSprite(-780,310,20,20);
	bgA.addImage(bg2);
	bgA.scale = 1.6
	bgB = createSprite(-1870,340,20,20)
	bgB.addImage(bg3)
	bgB.scale = 1.5
	bgC = createSprite(-2860,340,20,20);
	bgC.addImage(bg4);
	bgC.scale = 1.3
	bgD = createSprite(-3995,340,20,20);
	bgD.addImage(bg5)
	bgD.scale = 1.9
	bgE = createSprite(-5090,315,20,20);
	bgE.addImage(bg6);
	bgE.scale = 1.2
	bgF = createSprite(-6150,350,20,20);
	bgF.addImage(bg7)
	bgF.scale = 1.3
  girl = createSprite(850,470,20,20);
  girl.addImage("adding",girl1);
	girl.scale = 0.1

ins = createElement('h4')
ins.position(380,580)
ins.html('Press left Arrow to go to the next place')
ins.style('color','white');
}


function draw() {
  rectMode(CENTER);
  background(300);
  camera.x = girl.x;
  
  if(keyDown("left")&&girl.x>-6680){
	  girl.x = girl.x-20
  }
  if(keyDown("right")&&girl.x<1000){
	  girl.x= girl.x+10
  }
  console.log(girl.x);
  drawSprites();
  fill("white")
  textSize(13)
  stroke("lime")
  text("2. Colosseum",-780,100)
  text("1. Taj Mahal",600,100)
  text("3. Machu Picchu",-1870,100)
  text ("4. Christ the Redeemer",-2900,100);
  text("5. Chichén Itzá",-4000,150)
  text("6. Petra",-5000,100)
  text("7. Great Wall of China",-6000,100)
}



