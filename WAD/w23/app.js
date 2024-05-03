const path = require('path')
const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);

  let filepath = path.join(__dirname, '/public', parsedUrl.pathname);

  if(filepath == path.join(__dirname, '/public', "/")) {
    filepath = path.join(__dirname, '/public', "/index.html");
  }

  fs.exists(filepath, (exists) => {
    if(exists) {
      fs.readFile(filepath, (err, data) => {
        if(!err) {
          res.end(data);
        } else{
          res.end('404 not found')
        }
      })
    }else{
      res.end("404 not found")
    }
  })
});

server.listen(5000, () => {
  console.timeLog('Server is running on port 5000')
})