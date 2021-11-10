let input;
let title;
let go;

function setup() {
  textFont("Zen Antique");
  title = createElement("h1", "Hello,");
  title.style("text-align", "center");
  title.style("font-size", "80px");
  title.style("color", "white");
  title.style("text-transform", "uppercase");
  title.style("margin-top", "20px");
  title.style("text-font", "Zen Antique");

  // insert name before linking to second page

  input = createInput("").attribute("placeholder", "your name");
  input.style("text-align", "center");
  let xSize1 = windowWidth / 8;
  let ySize1 = windowHeight / 15;
  input.size(xSize1, ySize1);
  input.position(
    windowWidth / 2 - xSize1 / 2,
    (windowHeight * 2) / 3 - ySize1 * 2
  );

  go = createButton("let's go!");
  let xSize2 = windowWidth / 8;
  let ySize2 = windowHeight / 15;
  go.size(xSize2, ySize2);
  go.position(windowWidth / 2 - windowWidth / 16, windowHeight - 200);
  go.style("text-align", "center");

  intro = createP("You should tell them with flowers!");
  intro.style("font-size", "40px");
  intro.style("color", "white");
  intro.style("text-transform", "uppercase");
  intro.style("text-align", "center");

  go.mouseClicked(goTo);
}

function draw() {
  if (input.value() == "") {
    title.html("Hello, your name!");
  } else {
    title.html("Hello " + input.value() + "!");
  }
}

function goTo() {
  if (input.value() != "") {
    window.open("index2.html", "_self");
  }
}
