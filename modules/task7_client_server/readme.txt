1) накидали начальный шаг
   const http = require('http');

const server = http.createServer((req, res) => {
console.log("Server request");
})

server.listen(3000, 'localhost', (error)=> {
error ? console.log(error) : console.log('listening port 3000');
});
----------------------------
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
console.log("Server request");
console.log(req.url, req.method);

res.setHeader('Content-Type', 'text/html' )
res.write('<head><link rel="stylesheet" href="#"></head>')

res.write('<h1>Hello</h1>');
res.write('<p>My name is marat</p>');
res.end();

})

server.listen(PORT, 'localhost', (error)=> {
error ? console.log(error) : console.log(`listening port ${PORT}`);
});

_________________________________________-
const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  // console.log("Server request");
  // console.log(req.url, req.method);
  //
  // res.setHeader('Content-Type', 'text/html' )
  // res.write('<head><link rel="stylesheet" href="#"></head>')
  //
  // res.write('<h1>Hello</h1>');
  // res.write('<p>My name is marat</p>');

  res.setHeader('Content-Type', 'application/json')

  const data = JSON.stringify([
    {name: 'Tomy', age:35},
    {name: 'Artur', age: 40}
  ])
  res.end(data);

})

server.listen(PORT, 'localhost', (error)=> {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});


