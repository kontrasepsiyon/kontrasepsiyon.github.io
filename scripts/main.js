const defaultLanguage = 'en';

// Function to load the JSON file for the selected language
async function loadLanguage(language) {
    try {
        const response = await fetch(`language/${language}.json`);
        const translations = await response.json();
        return translations;
    } catch (error) {
        console.error("Error loading language file:", error);
    }
}

// Function to update the text content based on the loaded translations
function updateContent(translations) {
    document.querySelectorAll('[data-lang]').forEach(elt => {
        const key = elt.getAttribute('data-lang');
        elt.textContent = translations[key] || key;
    });
}

// Function to set the language and update the site content
async function setLanguage(language) {
    const translations = await loadLanguage(language);
    if (translations) {
        updateContent(translations);
        localStorage.setItem('language', language); // Store user's choice
    }
}

// Load the user's preferred language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem('language') || defaultLanguage;
    setLanguage(savedLanguage);
});







function toggleMenu() {
    document.body.classList.toggle('openMenu');
}

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  }

function loadPage(page) {
    const content = document.getElementById('content');
    
    // Fetch the HTML content from the respective file
    fetch(`${page}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching the ${page}.html file`);
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched content into the main content area
            loadPage('scripts/eligibility.js');

            content.innerHTML = data;
        })
        .catch(error => {
            content.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
        });

    document.body.classList.toggle('openMenu');    
}