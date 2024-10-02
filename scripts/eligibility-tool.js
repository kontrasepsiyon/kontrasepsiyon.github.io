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
    const selectedLabel = selected.querySelector('.selected-label');
    const clearBtn = selected.querySelector('.clear-selection');
    const allOptions = customSelect.querySelectorAll('.options li:not(.group)'); // Ignore group headings

    // Toggle dropdown when clicking the selected element
    selected.addEventListener('click', (e) => {
        // Check if the clear button is clicked
        if (!e.target.classList.contains('clear-selection')) {
            customSelect.classList.toggle('active');
        }
    });

    // Add click event listeners to individual options
    allOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Update the displayed selected value
            selectedLabel.textContent = option.querySelector('label').textContent;
            
            // Show the clear button (X)
            clearBtn.style.display = 'inline';

            // Remove 'selected-option' class and hide checkmarks from all options
            customSelect.querySelectorAll('.options li.selected-option')
                .forEach(selectedOption => {
                    selectedOption.classList.remove('selected-option');
                    selectedOption.querySelector('.checkmark').style.display = 'none'; // Hide checkmark
                });

            // Add 'selected-option' class and show checkmark for the clicked option
            option.classList.add('selected-option');
            option.querySelector('.checkmark').style.display = 'inline'; // Show checkmark

            // Close the dropdown after selection
            customSelect.classList.remove('active');


            selected.setAttribute(option.getAttribute('data-value'));
        });
    });

    // Clear the selection when the "X" button is clicked
    clearBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent dropdown from opening

        // Reset the displayed selected value
        selectedLabel.textContent = 'Choose an option';

        // Hide the clear button (X)
        clearBtn.style.display = 'none';

        // Remove 'selected-option' class and hide all checkmarks
        customSelect.querySelectorAll('.options li.selected-option')
            .forEach(selectedOption => {
                selectedOption.classList.remove('selected-option');
                selectedOption.querySelector('.checkmark').style.display = 'none'; // Hide checkmark
            });

        // Close the dropdown if it was open
        customSelect.classList.remove('active');


        selected.removeAttribute('data-value');
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('active');
        }
    });
});
  



function animateCharts() {
    const charts = document.querySelectorAll('.percentage-chart');
    charts.forEach(chart => {
      const value = chart.getAttribute('data-value');
      const percentage = (value / 4) * 100; // Scale value (1-4) to percentage (0-100)
      
      // Animate the conic-gradient background
      chart.style.background = `conic-gradient(
        yellow 0%, 
        yellow ${percentage - 25}%, 
        red ${percentage}%
      )`;
    });
  }
  
  // Initial animation
  animateCharts();
  
  // Optionally, you can update the chart values dynamically
  setInterval(() => {
    document.querySelectorAll('.percentage-chart').forEach(chart => {
      // Change the data-value dynamically (for example, cycling through values 1-4)
      let newValue = Math.floor(Math.random() * 4) + 1;
      chart.setAttribute('data-value', newValue);
    });
    animateCharts(); // Re-animate the charts after changing values
  }, 3000); // Change the value every 3 seconds
  