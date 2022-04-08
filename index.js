const fs = require('fs');
const readline = require('readline');

const sendInputToFile = (text) => {
    fs.writeFile('userinput.txt', `${text}`, err => {
      if (err) {
        console.log('Error occured when writing to file')
      }
    });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What are you thinking?', (text) => {
  rl.close();
    sendInputToFile(text);
});

