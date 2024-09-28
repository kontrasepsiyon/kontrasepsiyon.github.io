const slider = document.getElementById("styled-slider");
const output = document.getElementById("slider-value");

slider.oninput = function() {
    if (slider.value  == "1") {
        output.innerHTML = "Menarche to < 18 years"
    } 
    else if (slider.value  == "2") {
        output.innerHTML = "18 - 19"
    } 
    else if (slider.value  == "3") {
        output.innerHTML = "20 - 39"
    }
    else if (slider.value  == "4") {
        output.innerHTML = "40 - 45"
    }
    else if (slider.value  == "5") {
        output.innerHTML = ">= 46"
    }
    else {
        output.innerHTML = "Not selected";
    }
};








document.querySelectorAll('.custom-select').forEach(customSelect => {
  const selected = customSelect.querySelector('.selected');
  const allOptions = customSelect.querySelectorAll('.options li:not(.group)'); // Ignore groups in the list

  // Toggle dropdown when clicking the selected element
  selected.addEventListener('click', () => {
      customSelect.classList.toggle('active');
  });

  // Add click event listeners to individual options
  allOptions.forEach(option => {
      option.addEventListener('click', () => {
          selected.textContent = option.textContent;
          customSelect.classList.remove('active');
      });
  });

  // Optional: Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
      if (!customSelect.contains(e.target)) {
          customSelect.classList.remove('active');
      }
  });
});
