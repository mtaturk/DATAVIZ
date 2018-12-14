var data;
var steps;
var totalSteps = 0;

var canvasWidth = 800;
var canvasHeight = 800;
var fontSize = 26;

function preload() {
    data = loadJSON('data.json')
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    textSize(fontSize);

    //Assign the steps array from the JSON to steps var
    steps = data.steps;
    
    //Functions
    calculateSteps();
    drawRects();
}

function draw() {
    textAlign(CENTER);

    //Draw the text in center of canvas
    drawWords(width * .5);
    fill(0)
}

function drawWords(x) {
    fill(0);
    text("I walked " + totalSteps + " steps this year.", canvasWidth / 2, 80);
}

function calculateSteps() {
    for (var i = 0; i < steps.length; i++) {
        //Round the step values and add them to the totalSteps
        totalSteps += Math.floor(steps[i].steps);
    }
}

function drawRects() {
    var newX = 100;
    var newY = 200;
    var margin = 20;

    for(var i = 1; i < steps.length; i++) {
        noStroke();
        //Change the colors according to the stepcount, higher = darker
        if (Math.floor(steps[i].steps) <= 500) {
            fill(174, 213, 231)
        }
        
        if (Math.floor(steps[i].steps) >= 500) {
            fill(95, 113, 237)
        }
        
        if (Math.floor(steps[i].steps) >= 5000) {
            fill(44, 39, 244)
        }
        
        rect(newX, newY, 10, 10);

        //If the rect is the 30th in the row, set the y lower and begin from the left side again
        if (i % 30 == 0) {
            newX = 80;
            newY += 50;
        }

        //Add margin to the rect
        newX += margin;
    }
}