function compareWithBullets(alien, index, alienArray){
    for(var i = 0; i < bullets.length; i++){
        if(((bullets[i].x <= alien.x + 20) &&
            (bullets[i].x >= alien.x - 20)) &&
            ((bullets[i].y <= alien.y + 20) &&
            (bullets[i].y >= alien.y - 20))){
                var alienIndex = alienArray.indexOf(alien);
                alienArray.splice(alienIndex, 1);
                bullets.splice(i, 1);
            }
    }
}

function checkIfPlayerHit(){
    for(var i = 0; i < alienBullets.length; i++){
        if((alienBullets[i].x >= player.x) &&
            (alienBullets[i].x <= player.x + 75) &&
            (alienBullets[i].y >= player.y) &&
            (alienBullets[i].y <= player.y + 20)){
                gameOver = true;
            }
    }
}


function checkIfHit(){
    aliens.forEach(compareWithBullets);
    alienBullets.forEach(checkIfPlayerHit);
}

function makeNewLevel(){
    var xInit = 50;
    var xCurr = 50;
    var yCurr = 35;

    for(var i = 0; i < level; i++){
        for(var j = 0; j < 12; j++){
            aliens.push(new Alien(xCurr, yCurr));
            xCurr += 60;
        }
        xCurr = xInit;
        yCurr += 50;    
    }
    
}

function shootBack(){
    var alien = aliens[Math.floor(Math.random()*aliens.length)];
    alien.shoot();

}