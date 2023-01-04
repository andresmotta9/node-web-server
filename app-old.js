const http = require('http');

http.createServer( (req, res) => {

  console.log(req);
  res.write('Hello world');
  res.end();
})
.listen( 8080 );

console.log('Listening in port ',8080);