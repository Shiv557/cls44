var bg,bgImg;

function preload(){
    bgImg = loadImage("background.jpg");
}

function setup(){
    createCanvas(400,600);
    bg = createSprite(200,200);
    bg.addImage(bgImg);
    bg.velocityY = 4;
}


function draw(){
    background(0);
    if (bg.y>400){
        bg.y = height/2
    }
    drawSprites();
}
