const request = require('request');
const fs = require("fs");

const website = process.argv[2] //.slice(2);
const localFile = process.argv[3]
// console.log(whatever);

///////////////////////////////////////////////

request(website, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(localFile, body, err => {
    if (err) throw err;
    if (!response) {
      process.stdout.write(`Error: No response. Site is down or incorrect.\n`)
      
    } else if (response.statusCode !== 200) {
        process.stdout.write(`Error: response status code is not 200. Make sure your URL is correct. \n`);
    } else {
      // fs.statSync(localFile)
      process.stdout.write(`Downloaded and saved  ${fs.statSync(localFile)["size"]} bytes to ${localFile}\n`);
    }
  });
  
});
///////////////////////////////////////////////
console.log(`NOTE-TO-SELF: this line is at the end of code, just to digest async... `)
