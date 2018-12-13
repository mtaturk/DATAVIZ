var data;
var totalSteps = 0;

var fontSize = 30;

function preload() {
    data = loadJSON('data.json')
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(fontSize);
    var steps = data.steps;
    for (var i = 0; i < steps.length; i++) {
        var date = new Date();
        totalSteps += Math.floor(steps[i].steps);
    }
    console.log(totalSteps)
}

function draw() {
    textAlign(CENTER);
    drawWords();
}

function drawWords(x) {
    fill(0);
    text("I walked " + totalSteps + " steps this year.", windowWidth / 2, 80);
}