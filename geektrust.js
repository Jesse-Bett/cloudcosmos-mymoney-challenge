// Declaring dependencies.
const fs = require('fs');
const FileReader = require('filereader')
const commands = require('./commands')


let monthCount = 0
let moneyObject

// Getting input from textfile , taking the location to the textfile as a parameter.
const inputFile = process.argv[2]; //require('./input.txt')

if (!inputFile) { // Base case where there was no input file.
    console.log("No input file detected")
  }

// let reader = new FileReader();
  // reader.onload = function(){
    let reader = fs.readFile(inputFile, 'utf8', function (err,data) {
      if (err) {
          return console.log(err);
      }

      else if (data){
        //console.log(data)
        // going through the file line by line
    let lines = this.result.split('\n');
    for(let line = 0; line < lines.length; line++){
      inputLine = line.split("")  //creating an array of single words of each line

      if (inputLine[0] == 'ALLOCATE'){
        moneyObject = commands(parseFloat(inputLine[1]),parseFloat(inputLine[2]),parseFloat(inputLine[3]))
      }
                 
      else if (inputLine[0] == 'SIP'){
        moneyObject.sip(parseFloat(inputLine[1]),parseFloat(inputLine[2]),parseFloat(inputLine[3]))
      }
                  
      else if (inputLine[0] == 'CHANGE'){
        moneyObject.change( parseFloat(inputLine[1]).toFixed(2)+"%", // Change string to % float
                            parseFloat(inputLine[2]).toFixed(2)+"%", 
                            parseFloat(inputLine[3]).toFixed(2)+"%", 
                            inputLine[4],monthCount) //
      }

      else if (inputLine[0] == 'BALANCE'){
        moneyObject.balance(inputLine[1]) //stil a string
      }
                       
      else if (inputLine[0] == 'REBALANCE'){
        moneyObject.rebalance()
      }
            
    }
      }    
 });
//  reader.readAsText(inputFile);

    
//};
  

