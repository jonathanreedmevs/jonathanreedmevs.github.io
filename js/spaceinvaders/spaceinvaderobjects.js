function Player(){
    this.x = width / 2 - 20;
    this.y = height - 30;
    this.speed = 4;
    this.moveLeft = function(){
        if(this.x >= 0){
            this.x -= this.speed;
        }
        if(this.x < 0){
            this.x = width;
        }   
    }
    this.moveRight = function(){ 
        if(this.x <= width){
            this.x += this.speed;
        }
        if(this.x > width){
            this.x = 0;
        } 
    }
    this.make = function(){
        rectMode(CORNER);
        fill(95, 163, 95);
        rect(this.x, this.y, 75, 20);
    }
}

function Bullet(x, y){
    this.x = x;
    this.y = y - 20;
    this.speed = 4;

    this.launch = function(){
        rectMode(CORNER);
        fill(255,255,255);
        rect(this.x, this.y, 10, 10);
        this.y -= this.speed; 
    }

    this.alienLaunch = function(){
        rectMode(CORNER);
        fill(255,0,0,);
        rect(this.x, this.y, 10, 10);
        this.y += this.speed;
    }
}

function Alien(x,y){
    this.x = x; 
    this.y = y;

    this.make = function(){
        fill(237, 111, 149);
        ellipse(this.x, this.y, 40);
    }

    this.shoot = function(){
        alienBullets.push(new Bullet(this.x, this.y));
    }
}