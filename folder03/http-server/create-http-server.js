const http = require("http");

const myServer = http.createServer((request, response) => {
  console.log("What is this? It's request?");
  console.log("Request URL:", request.url);
  // console.log("Request Header", request.headers);
  response.writeHead(200, { "content-type": "text/html;charset=utf-8" });
  // response.write(
  //   "<b>Hi NodeJS!!!</b> oK? Yes or No? <br> orada mısın? bugün güzel mi? "
  // );
  response.end(
    "<b>Hi NodeJS!!! with Nodemon Lib.</b><br/> Good Time!!!"
  );
});

myServer.listen(3000);