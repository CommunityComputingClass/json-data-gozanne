let weather0;
let weather1;
let weather2;
let weather3;

function preload() {
  weather0 = loadJSON('https://api.openweathermap.org/data/2.5/weather?id=5128581&APPID=001b0f58045147663b1ea518d34d88b4')
  weather1 = loadJSON('https://api.openweathermap.org/data/2.5/weather?id=5391997&APPID=001b0f58045147663b1ea518d34d88b4')

}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER, CENTER)
}



function draw() {
  background(200);
  drawUI(weather0, 0, 0)
  drawUI(weather1, 1, 0)
}

function drawUI(info, column, row) {

  // Setup
  stroke(150)
  fill(150)
  rectMode(CORNER)
  rect((column * 400) + 10, (row * 400) + 10, 380, 380)

  //Title
  stroke(100)
  fill(100)
  rectMode(CENTER)
  rect((column * 400) + 200, (row * 400) + 40, textWidth(info.name) + 20, 40, 10)

  stroke(255)
  fill(255)
  textAlign(CENTER, CENTER)
  textSize(26)
  text(info.name, (column * 400) + 200, (row * 400) + 40)

  //Temp





}