var player;
var bullets = [];
var alienBullets = [];
var aliens = [];
var level = 1;
var gameOver = false;

function setup(){
    var cnv = createCanvas(750, 750);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x,y);
    player = new Player();

    var xInit = 50;
    var xCurr = 50;
    var yCurr = 35;

    //level one set up
    for(var j = 0; j < 12; j++){
        aliens.push(new Alien(xCurr, yCurr));
        xCurr += 60;
    }
}

function draw(){
    background(35, 40, 35);
    var time = Math.floor(random(10000, 50000));
    console.log(time);
    setTimeout(shootBack, time);
    player.make();

    if(aliens.length > 0 && !gameOver){
        //move left
        if(keyIsDown(LEFT_ARROW)){ player.moveLeft(); }
        //move right
        if(keyIsDown(RIGHT_ARROW)){ player.moveRight();}
        for(var i = 0; i < bullets.length; i++){
            bullets[i].launch();
            }
        for(var i = 0; i < alienBullets.length; i++){
            alienBullets[i].alienLaunch();
        }
        for(var i = 0; i < aliens.length; i++){
            aliens[i].make();
        }
        checkIfHit();
    } else if(aliens.length == 0 && !gameOver){
        level += 1;
        makeNewLevel();
    } else{
        background(35, 40, 35);
        textSize(40);
        textAlign(CENTER);
        text("Game Over.", width/ 2, height /2); 
    }
    
}

function keyTyped(){
    if(key === ' '){
        bullets.push(new Bullet(player.x + (75 /2), player.y + 10));
    }
}

