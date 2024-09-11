document.getElementById('searchContainer').addEventListener('submit', function(e) {
    e.preventDefault();

    const searchText = document.getElementById('searchInput').value.trim().toLowerCase();

    if (searchText) {
        fetchWikipediaResults(searchText);  // Fetch text info from Wikipedia
    } else {
        alert("Please enter a search term");
    }
});

// Fetching text information from Wikipedia API
function fetchWikipediaResults(searchText) {
    const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchText)}`;

    fetch(wikiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("No information found.");
            }
            return response.json();
        })
        .then(data => {
            displayWikipediaResults(data);
        })
        .catch(error => {
            console.error('Error fetching Wikipedia results:', error);
            document.getElementById('textResults').innerHTML = `<p>${error.message}</p>`;
        });
}

// Display Wikipedia text results
function displayWikipediaResults(data) {
    const textResultsDiv = document.getElementById('textResults');
    textResultsDiv.innerHTML = '';

    const title = document.createElement('h3');
    title.textContent = data.title;

    const description = document.createElement('p');
    description.textContent = data.extract;

    textResultsDiv.appendChild(title);
    textResultsDiv.appendChild(description);
}
