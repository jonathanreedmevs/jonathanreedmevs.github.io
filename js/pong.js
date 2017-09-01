var x;
var y;
var rectYPos;
var xSpeed;
var ySpeed;

function setup(){
    createCanvas(windowWidth, windowHeight);

    xSpeed = 2;
    ySpeed = 2;
    
    rectYPos = 50;

    x = Math.floor(random(windowWidth / 2, windowWidth));
    y = Math.floor(random(windowHeight));
}

function draw(){
    background(0);

    x += xSpeed;
    if(x == windowWidth || x <= 15){
        xSpeed *= -1;
    }
    y += ySpeed;
    if(y == windowHeight || y <= rectYPos){
        ySpeed *= -1;
    }
    fill(255,255,255);
    ellipse(x,y,25,25);
    if(keyIsDown(UP_ARROW)){
        rectYPos -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        rectYPos += 3;
    }
    rect(10, rectYPos, 25, 100);
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        if(rectYPos > 0){
            rectYPos -= 3;
        }

    } else if(keyCode === DOWN_ARROW){
        if(rectYPos < windowHeight){
            rectYPos += 3;
        }

    }
}