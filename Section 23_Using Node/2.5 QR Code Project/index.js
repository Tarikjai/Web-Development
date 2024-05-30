import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
                    //1. Use the inquirer npm package to get user input.
  .prompt([
    {
        type: 'input', // Specify it as an input type
        name: 'website', // Key to retrieve input value
        message: 'Please enter your website:', // Prompt message displayed to the user
    }
  ])
                        //2. Use the qr-image npm package to turn the user entered URL into a QR code image.
  .then((answers) => {
    
    console.log("Thank you for submitting your website:", answers.website);

    // Write the url in form of a QR code
    var qr_png = qr.imageSync(answers.website, { type: 'png' });

    fs.writeFile("qr-image.png",qr_png, (err) => {
      if (err) throw err;
      console.log('The QR code has been saved!');
    }); 

    // Write the url in texte
    fs.writeFile("url.txt",answers.website, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.log("Something else went wrong",error);
    }
  });