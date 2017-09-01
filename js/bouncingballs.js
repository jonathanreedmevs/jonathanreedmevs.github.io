/**
 * Honestly,
 * 
 * I got stuck and just had to google the solution.
 * It wasn't exactly like mine but it helped me wrap things up.
 * 
 */

var balls = [];
var numOfBalls;
var direction;

function setup(){
    createCanvas(windowWidth, windowHeight,);
    ellipseMode(CENTER);

    //numOfBalls = 75;
    direction = [-1,1];

    for(var i = 0; i < numOfBalls; i++){
        balls.push(new Ball());
    }
}

function draw(){
    background('black');
    //background(Math.floor(random(256)), Math.floor(random(256)), Math.floor(random(256)));

    for(var i = 0; i < balls.length; i++){
        balls[i].make();
        balls[i].move();
        balls[i].check();
    }
}

function mouseClicked(){
    balls.push(new Ball(mouseX, mouseY, 25));
}

function keyPressed(){
    if(keyCode === ENTER){
        clear();
    }
}

function Ball(xPos, yPos, diameter){

    this.xPos = xPos || Math.floor(random(windowWidth));
    this.yPos = yPos || Math.floor(random(windowHeight));
    this.xSpeed = 7 * direction[Math.floor(random(2))];
    this.ySpeed = 7 * direction[Math.floor(random(2))];
    this.diameter = diameter;

    this.move = function(){
        this.xPos += this.xSpeed;
        this.yPos += this.ySpeed;
    }

    this.make = function(){
        fill(Math.floor(random(256)), Math.floor(random(256)), Math.floor(random(256)));
        ellipse(this.xPos, this.yPos, this.diameter);
    }

    this.check = function(){
        if(this.xPos > windowWidth || this.xPos < 0){
            this.xSpeed *= -1;
        }
        if(this.yPos > windowHeight || this.yPos < 0){
            this.ySpeed *= -1;
        }
    }
}