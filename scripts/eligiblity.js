const slider = document.getElementById("slider");
const output = document.getElementById("slider-value");

slider.oninput = function() {
  output.innerHTML = slider.value;
};