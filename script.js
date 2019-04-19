var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
css.innerHTML =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  //console.log(color1.value);
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function rand() {
  var c = Math.floor(Math.random() * 80 + 10);
  return c;
}
ran.addEventListener("click", btncolor);
function btncolor(c) {
  var c1 = "#" + rand() + rand() + rand();
  var c2 = "#" + rand() + rand() + rand();
  console.log("c1" + c1);
  console.log("c2" + c2);
  body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";

  css.textContent = body.style.background + ";";
}
