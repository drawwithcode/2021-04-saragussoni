let myCanvas;

let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;

let imm1;
let imm2;
let imm3;
let imm4;
let imm5;
let imm6;
let imm7;
let imm8;

const urlString = window.location.href;
const url = new URL(urlString);

function preload() {
  img1 = loadImage("./assets/basil.png");
  imm2 = loadImage("./assets/thistle.png");
  imm3 = loadImage("./assets/geranium.png");
  img4 = loadImage("./assets/rose.png");
  imm5 = loadImage("./assets/dalia.png");
  imm6 = loadImage("./assets/begonia.png");
  img7 = loadImage("./assets/chervil.png");
  imm8 = loadImage("./assets/buttercup.png");
}

function setup() {
  myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.background("#0e2f44");

  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);

  // text
  textFont("Zen Antique");
  textAlign(CENTER);
  textSize(45);
  let bouquet = "Choose the flowers for your bouquet!";
  fill(255);
  text(bouquet, 0, -220);

  // creation buttons
  button1 = createImg("./assets/basil.png");
  button1.size(160, 160);
  button1.position(windowWidth / 2 - 400, windowHeight - 510);
  button1.mousePressed(hate);

  button2 = createImg("./assets/thistle.png");
  button2.size(160, 160);
  button2.mousePressed(misanthropy);
  button2.position(windowWidth / 2 - 190, windowHeight - 510);

  button3 = createImg("./assets/geranium.png");
  button3.size(160, 160);
  button3.position(windowWidth / 2 + 20, windowHeight - 510);
  button3.mousePressed(stupidity);

  button4 = createImg("./assets/rose.png");
  button4.size(160, 160);
  button4.position(windowWidth / 2 + 240, windowHeight - 510);
  button4.mousePressed(disdain);

  button5 = createImg("./assets/dalia.png");
  button5.size(160, 160);
  button5.position(windowWidth / 2 - 400, windowHeight - 250);
  button5.mousePressed(dignity);

  button6 = createImg("./assets/begonia.png");
  button6.size(160, 160);
  button6.position(windowWidth / 2 - 190, windowHeight - 250);
  button6.mousePressed(caution);

  button7 = createImg("./assets/chervil.png");
  button7.size(160, 160);
  button7.position(windowWidth / 2 + 20, windowHeight - 250);
  button7.mousePressed(sincerity);

  button8 = createImg("./assets/buttercup.png");
  button8.size(160, 160);
  button8.position(windowWidth / 2 + 240, windowHeight - 250);
  button8.mousePressed(childish);
}

function draw() {}

// open external links

function hate() {
  window.open(
    "https://www.urbandictionary.com/define.php?term=hate&utm_source=search-action"
  );
}

function misanthropy() {
  window.open("https://www.urbandictionary.com/define.php?term=misanthropy");
}

function stupidity() {
  window.open("https://www.urbandictionary.com/define.php?term=Stupidity");
}

function disdain() {
  window.open("https://www.urbandictionary.com/define.php?term=Disdain");
}

function dignity() {
  window.open("https://www.urbandictionary.com/define.php?term=Dignity");
}

function caution() {
  window.open("https://www.urbandictionary.com/define.php?term=Caution");
}

function sincerity() {
  window.open("https://www.urbandictionary.com/define.php?term=sincerity");
}

function childish() {
  window.open("https://www.urbandictionary.com/define.php?term=childish");
}
