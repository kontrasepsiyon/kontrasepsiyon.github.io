const slider = document.getElementById("styled-slider");
const output = document.getElementById("slider-value");

slider.oninput = function() {
  output.innerHTML = slider.value;
};