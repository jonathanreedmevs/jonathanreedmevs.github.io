/**
 * Make sure students have the 
 * p5.js VSC extension!
 */

var rectGlobal;
var ellipseGlobal;
var triangleGlobal;
var colorsToUse;
var shapeToUse;
var globalSlider;


function setup(){
    colorMode(RGB);
    
    createCanvas(windowWidth, windowHeight-50);
    background(51);

    shapeToUse = "ellipse";
    

    var rectColors = [random(255), random(255), random(255)];
    var ellipseColors = [random(255), random(255), random(255)];
    var triangleColors = [random(255), random(255), random(255)];

    rectGlobal = rectColors;
    ellipseGlobal = ellipseColors;
    triangleGlobal = triangleColors;

    button = createButton('Reset');
    button.position(40, windowHeight-100);
    button.mousePressed(reset);
    button.size(100,50);

    slider = createSlider(50, 200);
    slider.position(300,50);
    globalSlider = slider;

    //Draw 3 shapes to the canvas and give them 3 different colors

    fill(rectColors[0], rectColors[1], rectColors[2]);
    rect(20,20,50,50);

    fill(ellipseColors[0],ellipseColors[1],ellipseColors[2]);
    ellipse(110, 50, 50,50);

    fill(triangleColors[0],triangleColors[1], triangleColors[2]);
    triangle(150,75,188,10,250,75);
    
}

function mouseDragged(){
    /*if(mouseX != 0 && mouseY != 0){
        ellipse(mouseX, mouseY, random(100), random(100)).fill(random(255), random(255), random(255));
    }*/

    if(shapeToUse == "ellipse"){
        fill(colorsToUse[0], colorsToUse[1], colorsToUse[2]);
        size(slider.value(),slider.value());
        ellipse(mouseX, mouseY, random(100), random(100));
    }

    if(shapeToUse == "rectangle"){
        fill(colorsToUse[0], colorsToUse[1], colorsToUse[2]);
        rect(mouseX, mouseY, random(100), random(100)).size(slider.value(),slider.value());
    }

    if(shapeToUse == "triangle"){
        fill(colorsToUse[0], colorsToUse[1], colorsToUse[2]);
        triangle(mouseX - 46, mouseY + 22, mouseX  - 8, mouseY - 43, mouseX + 54, mouseY + 22).size(slider.value(),slider.value());
    }
    
}

function mousePressed(){
    var rectDist = dist(20,20, mouseX, mouseY);
    var ellipseDist = dist(110,50, mouseX, mouseY);
    var triangleDist = dist(196, 53, mouseX, mouseY);

    if(rectDist < 50){
        colorsToUse = rectGlobal;
        shapeToUse = "rectangle";
    } 
    if(ellipseDist < 25){
        colorsToUse = ellipseGlobal;
        shapeToUse = "ellipse";
    } 
    if(triangleDist < 75){
        colorsToUse = triangleGlobal;
        shapeToUse = "triangle";
    } 

}

function reset(){
    createCanvas(windowWidth, windowHeight-50);
    background(51);
    

    var rectColors = [random(255), random(255), random(255)];
    var ellipseColors = [random(255), random(255), random(255)];
    var triangleColors = [random(255), random(255), random(255)];

    rectGlobal = rectColors;
    ellipseGlobal = ellipseColors;
    triangleGlobal = triangleColors;

    fill(rectColors[0], rectColors[1], rectColors[2]);
    rect(20,20,50,50);

    fill(ellipseColors[0],ellipseColors[1],ellipseColors[2]);
    ellipse(110, 50, 50,50);

    fill(triangleColors[0],triangleColors[1], triangleColors[2]);
    triangle(150,75,188,10,250,75);
}

