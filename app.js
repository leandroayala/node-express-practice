//working whit http node module
//https://nodejs.org/api/http.html#http

const http = require("http");

//creating a http sever (service)
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("wellcome to the web server");
  }

  if (req.url === "/about") {
    res.end("About me");
  }

  res.end(
    `<h1>Ops!</h1>
    <p> we can´t seem to find the page you are looking for</p>
    <a href="/"> back home</a>`
    
  );
});

//make avaliabe the server port
//run de script node
//in your browser access localhost:5000
server.listen(5000);
