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

    steps = data.steps;
    
    //Functions
    calculateSteps();
    drawRects();
}

function draw() {
    textAlign(CENTER);
    drawWords(width * .5);
    fill(0)
}

function drawWords(x) {
    fill(0);
    text("I walked " + totalSteps + " steps this year.", canvasWidth / 2, 80);
}

function calculateSteps() {
    for (var i = 0; i < steps.length; i++) {
        var date = new Date();
        totalSteps += Math.floor(steps[i].steps);
    }
}

function drawRects() {
    var newX = 100;
    var newY = 200;
    var margin = 20;
    var index = 0;

    for(var i = 1; i < steps.length; i++) {
        if(Math.floor(steps[i].steps) > 1000) {
            fill(0)
        } else {
            fill(255)
        }

        rect(newX, newY, 10, 10);

        if (i % 30 == 0) {
            newX = 80;
            newY += 50;
        }
        newX += margin;
    }
}