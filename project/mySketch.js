let data

function preload() {
  data = loadJSON("flower.json")

}

function setup() {
  createCanvas(400, 400);
  background(200);
  console.log(data.fruits)
 
}

function draw(){
  for (i in data.fruits) {
    text(data.fruits[i], 10, 10 + 10*i)
  }

}