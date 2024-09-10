document.getElementById('searchContainer').addEventListener('submit', function(e) {
    //prevent the page from reloading
    e.preventDefault();

    const searchText = document.getElementById('searchInput').value.trim();

    // function to fetch data
    if (searchText) {
        fetchSearchResults(searchText);
    } else {
        alert("please, enter a search term");
    }
});

// fecth results
function fetchSearchResults(searchText) {
    const searchEngineID = '60c6fb4071e15419b';
    const query = 'Building search functionality with JavaScript';

    const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${searchEngineID}&q=${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Check your internet connectivity");
            }
            return response.json(); // return the response to JSON
        })
        .then(data => {
            console.log(data);
            displayResults(data);
        })
        .catch(error => {
            console.error('There has been a problem:', error);
        })
}

// section to display results
function displayResults(data) {
    const resultsDiv = document.getElementById('results');
    resultsDiv. innerHTML= '';

    if (data.items && data.items.length > 0) {
        data.items.forEach(result => {
            const resultItem = document.createElement('div');
            resultItem.innerHTML = `<p><a href="${result.link}">${result.title}</a></p>`;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found</p>';
    }
}