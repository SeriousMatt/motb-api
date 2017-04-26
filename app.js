//Call library
var https = require('https');
//Define parameters
var options = {
  host: 'domain',
  path: 'path',
  method: 'GET',
};
//Sent request
var req = https.request(options, function(res) {
  console.log(res.statusCode);
  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();
//Output headers
console.log(req._headers)
req.on('error', function(e) {
//Output errors
  console.error(e);
});
