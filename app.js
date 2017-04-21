//Define Url
var url = 'https://bibles.org/versions/eng-GNTD/books.js';
//Call libraries
const https = require('https');
//Send get request
https.get(url, (res) => {
  //Return response
  console.log('statusCode:', res.statusCode);
  console.log('headers:',    res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  //Return errors
  console.error(e);
});
