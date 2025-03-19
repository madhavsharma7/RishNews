function fetchHeadlines() {
    const apiKey = "773dcaa65d9b9a5df06b87e05a18b242";
    const category = "world"; // Setting category explicitly to "world"
    
    // Construct the API URL
    const apiUrl = `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${apiKey}`;
  
    // Make the API call
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Log the data for debugging
        const headlinesDiv = document.getElementById("headlines");
        headlinesDiv.innerHTML = ""; // Clear any previous content
  
        if (data && data.articles) {
          data.articles.forEach((article) => {
            const articleElement = document.createElement("p");
            articleElement.innerText = article.title;
            headlinesDiv.appendChild(articleElement);
          });
        } else {
          headlinesDiv.innerHTML = "No headlines found.";
        }
      })
      .catch((error) => {
        console.error("Error fetching headlines:", error);
      });
  }
  