document.addEventListener('DOMContentLoaded', () => {
    function fetchTopHeadlines() {
        const apiKey = '773dcaa65d9b9a5df06b87e05a18b242';
        const category = 'general';
        // const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=5&apikey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Headlines Data:", data);  // Debugging API response

                const container = document.getElementById('headlines-container');

                if (!container) {
                    console.error("Error: headlines-container not found");
                    return;
                }

                if (!data.articles || data.articles.length === 0) {
                    container.innerHTML = '<p>No Headlines Available.</p>';
                    return;
                }

                container.innerHTML = ''; // Clear previous results
                data.articles.forEach(article => {
                    let newsItem = document.createElement('div');
                    newsItem.classList.add("headline-item"); // Add a class to style the container

                    newsItem.innerHTML = `
                    
                        <img class="img" src="${article.image || 'fallback-image.jpg'}" alt="${article.title}" style="width:100%; max-width:500px;">
                        <h2 class="title">${article.title}</h2>
                        <p class="desc">${article.description}</p>
                        <p class="readmore"><a href="${article.url}" target="_blank"> Read more</a></p>
                        <hr>
                    
                    `;
                    container.appendChild(newsItem);
                });
            })
            .catch(error => {
                console.error("Error fetching top headlines:", error);
            });
    }

    function fetchSearchResults() {
        const apiKey = '773dcaa65d9b9a5df06b87e05a18b242';
        // const url = `https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=5&apikey=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched Search Results:", data);  // Debugging API response

                const container = document.getElementById('search-container');

                if (!container) {
                    console.error("Error: search-container not found");
                    return;
                }

                if (!data.articles || data.articles.length === 0) {
                    container.innerHTML = '<p>No Latest News Available</p>';
                    return;
                }

                container.innerHTML = ''; // Clear previous results
                data.articles.forEach(article => {
                    let newsItem = document.createElement('div');
                    newsItem.classList.add("news-item")
                    newsItem.innerHTML = `
                        <img class="img-news" src="${article.image || 'fallback-image.jpg'}" alt="${article.title}" style="width:100%; max-width:500px;">
                        <h2 class="h2-news">${article.title}</h2>
                        <p class="p-news">${article.description}</p>
                        <p class="readmore-news"> <a href="${article.url}" target="_blank">Read more</a></p>
                        <hr>
                    `;
                    container.appendChild(newsItem);
                });
            })
            .catch(error => {
                console.error("Error fetching search results:", error);
            });
    }

    fetchTopHeadlines();
    fetchSearchResults();
});
