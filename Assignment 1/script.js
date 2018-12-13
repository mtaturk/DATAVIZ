var healthData;

function preload() {
    healthData = loadJSON('data.json')
}

function setup () {
    console.log(healthData)
}