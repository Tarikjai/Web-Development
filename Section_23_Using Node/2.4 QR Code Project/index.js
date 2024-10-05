/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

 

import fs from 'fs'
import inquirer from 'inquirer';
import qr from 'qr-image'

inquirer
.prompt([
    {
    type: 'input',
    name: 'URL',
    message: "What's your URL",
  }
])
  .then((answers) => {
    
    var qr_svg = qr.image(answers.URL);
    qr_svg.pipe(fs.createWriteStream('QR_code.png'));
    console.log("qr generated")
    fs.writeFile('url.txt', answers.URL, err => {
        if (err) {
          console.error(err);
        } else {console.log("file generated")// file written successfully
        }
      });
  
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });