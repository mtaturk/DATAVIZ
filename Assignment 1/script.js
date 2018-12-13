var data;

function preload() {
    data = loadJSON('data.json')
}

function setup () {
    var steps_data = data.steps;
    console.log(steps_data.length);
}