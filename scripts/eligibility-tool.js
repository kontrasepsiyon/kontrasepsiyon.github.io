(function() {
    const slider = document.getElementById("styled-slider");
    const output = document.getElementById("slider-value");

    slider.oninput = function() {
        if (slider.value  == "1") {
            output.innerHTML = "Menarche to < 18 years"
            eligibilityData.age = 1
        } 
        else if (slider.value  == "2") {
            output.innerHTML = "18 - 19"
            eligibilityData.age = 2
        } 
        else if (slider.value  == "3") {
            output.innerHTML = "20 - 39"
            eligibilityData.age = 3
        }
        else if (slider.value  == "4") {
            output.innerHTML = "40 - 45"
            eligibilityData.age = 4
        }
        else if (slider.value  == "5") {
            output.innerHTML = ">= 46"
            eligibilityData.age = 5
        }
        else {
            output.innerHTML = "Not selected";
            eligibilityData.age = -1
        }
    };    
})();




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


            selected.setAttribute('data-value', option.getAttribute('data-value'));
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
  



function setChartValue(chart, value) {
    const circle = chart.querySelector('.progress-ring__circle');
    //const text = chart.querySelector('.chart-label');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
  
    // Set the stroke-dasharray and stroke-dashoffset properties
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
  
    // Calculate the percentage offset for the selected value
    const offset = circumference - (value / 4) * circumference;
  
    // Animate the stroke-dashoffset
    circle.style.strokeDashoffset = offset;
  
    // Update the label with the percentage value
    const label = chart.querySelector('.chart-label');
    label.textContent = `${(value / 4) * 100}%`;
    //text.textContent = `${percentage}%`;

    // Change the color based on the value
    if (value === 1) {
      circle.setAttribute('stroke', 'yellow');
    } else if (value === 2) {
      circle.setAttribute('stroke', 'orange');
    } else if (value === 3) {
      circle.setAttribute('stroke', 'red');
    } else if (value === 4) {
      circle.setAttribute('stroke', 'darkred');
    }
}
  
  // Initialize the charts
setInterval(() => {
    document.querySelectorAll('.percentage-chart').forEach(chart => {
        //const value = chart.getAttribute('data-value');
        value = Math.floor(Math.random() * (4) + 1);      
        setChartValue(chart, value);
    });
}, 5000); // Change the value every 3 seconds

  