function toggleMenu() {
    document.body.classList.toggle('openMenu');
}

function loadPage(page) {
    const content = document.getElementById('content');
    
    // Fetch the HTML content from the respective file
    fetch('${page}.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching the ${page}.html file');
            }
            return response.text();
        })
        .then(data => {
            // Insert the fetched content into the main content area
            content.innerHTML = data;
        })
        .catch(error => {
            content.innerHTML = '<h2>Error</h2><p>${error.message}</p>';
        });

    document.body.classList.toggle('openMenu');

}
