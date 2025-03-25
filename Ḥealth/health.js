function fetchHeadlines() {
  const apiKey = "773dcaa65d9b9a5df06b87e05a18b242"; // Replace with your valid API key
//   const apiUrl = `https://gnews.io/api/v4/top-headlines?category=health&apikey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data); // Debugging log

      const headlinesDiv = document.getElementById("headlines-container");
      headlinesDiv.innerHTML = ""; // Clear previous content

      if (data.articles && data.articles.length > 0) {
        data.articles.forEach((article) => {
          const articleElement = document.createElement("div");
          articleElement.classList.add("news-item");
          articleElement.innerHTML = `
            <img class="img" src="${article.image || "fallback-image.jpg"}" 
                 alt="${article.title}" style="width:100%; max-width:500px;">
            <h3 class="title">${article.title}</h3>
            <p class="desc">${
              article.description || "No description available."
            }</p>
            <p class="readmore"><a href="${
              article.url
            }" target="_blank">Read more</a></p>
            <hr>
          `; // <-- FIX: Closing backtick added

          headlinesDiv.appendChild(articleElement); // <-- FIX: Moved outside the template string
        });
      } else {
        headlinesDiv.innerHTML = "<p>No headlines found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching headlines:", error);
      document.getElementById("headlines-container").innerHTML =
        "<p>Failed to load headlines. Please try again later.</p>";
    });
}

// Call function when the page loads
document.addEventListener("DOMContentLoaded", fetchHeadlines);
