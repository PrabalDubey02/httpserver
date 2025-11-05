const http = require("http");

// Create Server
const server = http.createServer((req, res) => {

  // Set response header
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send response based on request URL
  if (req.url === "/") {
    res.write("Welcome to Home Page");
  } 
  else if (req.url === "/about") {
    res.write("This is About Page");
  } 
  else if (req.url === "/contact") {
    res.write("This is Contact Page");
  } 
  else {
    res.write("404 Page Not Found");
  }

  res.end(); // End response
});

// Listening on port 3000
server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
