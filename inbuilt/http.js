let http = require("http");

let server = http.createServer(function(req,res) {
  res.write('<h1>Hello from nodejsSERVER<h1>')
  res.end()
})

server.listen(8771)