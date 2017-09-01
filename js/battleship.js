var gameGrid = [[],[],[],[],[],[],[],[],[],[]];
var map;
var xCornerInitial;
var yCornerInitial;
var coords;
var padding;
var carrierScore;
var battleshipScore;
var cruiserScore;
var submarineScore;
var destroyerScore;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(72, 118, 191);
    rectMode(CORNER);

    map = new Map();
    
    coords = [];
    
    padding = (windowWidth - 500) / 2;
    console.log(padding);

    carrierScore = 0;
    battleshipScore = 0;
    cruiserScore = 0; submarineScore = 0;
    destroyerScore = 0;

    xCornerInitial = padding;
    yCornerInitial = windowHeight / 8;
    var xCorner = padding;
    var yCorner = windowHeight / 8;

    for(var i = 0; i < gameGrid.length; i++){
        for(var j = 0; j < 10; j++){
            map.set([xCorner, yCorner], [i,j]);
            gameGrid[i].push(new Square(xCorner, yCorner));
            xCorner += 50;
        }
        yCorner += 50;
        xCorner = xCornerInitial;
    }
    placeShips();

    for(var i = 0; i < gameGrid.length; i++){
        for(var j = 0; j < 10; j++){
            gameGrid[i][j].make();
        }
    }

    console.log(map);

    //noLoop();
}


function draw(){
    textAlign(CENTER);
    textSize(50);
    textStyle(BOLD);
    fill(83, 219, 212);
    text("BATTLESHIP", windowWidth / 2, 75);
    textStyle(NORMAL);
    text("Red = Hit", windowWidth / 2, yCornerInitial + 550);
    text("Blue = Miss", windowWidth / 2, yCornerInitial + 600);
    
    textSize(35);
    textStyle(BOLD);
    fill('black');
    text("Ships left:", padding - 200, yCornerInitial + 100);
    textStyle(NORMAL);
    text("Carrier hits: " + carrierScore + "/5", padding - 200, yCornerInitial + 150);
    text("Battleship hits: " + battleshipScore + "/4", padding - 200, yCornerInitial + 200);
    text("Cruiser hits: " + cruiserScore + "/3", padding - 200, yCornerInitial + 250);
    text("Submarine hits: " + submarineScore + "/3", padding - 200, yCornerInitial + 300);
    text("Destroyer hits: " + destroyerScore, + "/2", padding - 200, yCornerInitial + 350);
    
}

//key, value, map
function giveMeDims(gridCoordinates, cornerCoordinates, gameMap){
    if((mouseX >= cornerCoordinates[0] && mouseX <= (cornerCoordinates[0] + 50)) &&
        (mouseY >= cornerCoordinates[1] && mouseY <= (cornerCoordinates[1] + 50))){
         coords = gridCoordinates;
    }

}

function mousePressed(){
    map.forEach(giveMeDims);
    var gameGridCoordinates = coords;
    var xSpot = gameGridCoordinates[0];
    var ySpot = gameGridCoordinates[1];
    if(gameGrid[xSpot][ySpot].ship){
        gameGrid[xSpot][ySpot].hitMark();
    } else{
        gameGrid[xSpot][ySpot].missMark();
    }
  

}

function placeShips(){
    //carrier: size 5
    for(var i = 0; i < 4; i++){
        gameGrid[3][i].ship = true;
    }
    //battleship: size 4
    for(var i = 0; i < 3; i++){
        gameGrid[i][6].ship = true;
    }
    //cruiser: size 3;
    for(var i = 5; i < 8; i++){
        gameGrid[i][1].ship = true;
    }
    //submarine: size 3;
    for(var i = 4; i < 7; i++){
        gameGrid[7][i].ship = true;
    }
    //destroyer: size 2 
    gameGrid[0][0].ship = true;
    gameGrid[0][1].ship = true;
}

function Square(x,y){
    this.x = x;
    this.y = y;
    this.ship = false;

    this.make = function(){
        strokeWeight(4);
        rect(this.x, this.y, 50, 50);
    }
    this.hitMark = function(){
        fill(200,0,0);
        carrierScore++;
        rect(this.x,this.y, 50, 50);
    }
    this.missMark = function(){
        fill(0,0,200);
        rect(this.x, this.y, 50,50);
    }
}