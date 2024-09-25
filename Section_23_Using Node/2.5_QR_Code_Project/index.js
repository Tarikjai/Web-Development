/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import  fs from 'fs' 
 
import qr from 'qr-image'

 
const question =  {
    type: 'input',
    name: 'question',
    message: 'Enter the URL that you want to convert.',
    default: 'www.google.com',
  }


inquirer
  .prompt([question])
  .then((answers) => {
    // Use user feedback for... whatever!!
    var url = JSON.stringify(answers.question, null, '  ')

    var qr_svg = qr.image(url , { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    
    
    // Write the user's input to a file
    fs.writeFile("url.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment")
    } else {
      // Something else went wrong
      console.log("Something else went wrong")
    }
  });

