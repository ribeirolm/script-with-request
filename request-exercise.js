// Create a new .js file and using request, make a 'GET' request to 'https://sytantris.github.io/http-examples/future.jpg' using chaining. The chain should:
// Use .on('error') to handle any errors
// Use .on('response') to log the HTTPS response code, response message (response.statusMessage) and content type (response.headers['content-type'])
// Use piping and fs.createWriteStream to save the file to your working directory ('./future.jpg')


var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', function (err){
    throw error;
  })
  .on('response', function (response){
    console.log('Downloading image...');
    console.log('Response code: ', response.statusCode);
    console.log('Response message: ', response.statusMessage);
    console.log('Content type: ',  response.headers['content-type']);
    console.log('Download complete.');
  })
  .pipe(fs.createWriteStream('./future.jpg'));

