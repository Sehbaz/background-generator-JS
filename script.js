var css = document.querySelector("p");

// Selecting the Color picker using the class name on html code
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

// selecting the body
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background;
}

// Adding Listener to the input color fields
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
