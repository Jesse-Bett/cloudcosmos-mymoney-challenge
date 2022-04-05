// Declaring dependencies.
const fs = require('fs');
const commands = require('./commands')


let monthCount = 0
let moneyObject

// Getting input from textfile , taking the location to the textfile as a parameter.
const inputFile = process.argv[2];

if (!inputFile) { // Base case where there was no input file.
    console.log("No input file detected")
  }

let reader = new FileReader();
  reader.onload = function(){

    // going through the file line by line
    let lines = this.result.split('\n');
    for(let line = 0; line < lines.length; line++){
      inputLine = line.split("")  //creating an array of single words of each line

      if (inputLine[0] == 'ALLOCATE'){}
                 
      else if (inputLine[0] == 'SIP'){}
                  
      else if (inputLine[0] == 'CHANGE'){}

      else if (inputLine[0] == 'BALANCE'){}
                       
      else if (inputLine[0] == 'REBALANCE'){}
            
    }
  };
  reader.readAsText(inputFile);









// Printing the output to the console.