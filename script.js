
function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    if (originalUrl.trim() === "") {
      alert("Please enter a valid URL.");
      return;
    }
    // You can replace this with your own URL shortening logic
    // For simplicity, I'm just appending 'short/' to the original URL
    var shortenedUrl = "url/" + Math.random().toString(36).substring(2, 8);
    document.getElementById("shortenedLink").innerText = "Shortened URL: " + shortenedUrl;
  }