const http = require("http");
const handleRequest = require("./routes.js");

const server = http.createServer(handleRequest.handleRequest);

server.listen(4500);
