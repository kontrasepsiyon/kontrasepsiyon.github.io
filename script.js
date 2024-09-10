function toggleMenu() {
    document.body.classList.toggle('openMenu');
}

function loadPage(page) {
    const content = document.getElementById('content');

    if (page === 'eligibility-tool') {
        content.innerHTML = `<h2>Eligibility tool</h2><p>This is the Eligibility tool page.</p>`;
    } 
    
    else if (page === 'other-condiditons') {
        content.innerHTML = `<h2>Other conditions</h2><p>This is the Other conditions page.</p>`;
    } 
    
    else if (page === 'additional-info') {
        content.innerHTML = `<h2>Additional info</h2><p>This is the Additional info page.</p>`;
    }

    else if (page === 'how-to-use-the-tool') {
        content.innerHTML = `<h2>How to use the tool</h2><p>This is the How to use the tool page.</p>`;
    }

    else if (page === 'about') {
        content.innerHTML = `<h2>About</h2><p>This is the About page.</p>`;
    }

    else if (page === 'language') {
        content.innerHTML = `<h2>Language</h2><p>This is the Language page.</p>`;
    }

    document.body.classList.toggle('openMenu');
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
            content.innerHTML = data;
        })
        .catch(error => {
            content.innerHTML = `<h2>Error</h2><p>${error.message}</p>`;
        });
}

