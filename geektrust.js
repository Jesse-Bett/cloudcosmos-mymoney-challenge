// Declaring dependencies.
const fs = require('fs');



// Getting input from textfile , taking the location to the textfile as a parameter.
const inputFile = process.argv[2];

fs.readFile(inputFile, 'utf8', function(err, data) {  //using fs module to read commands from input file
    if (err) throw err;
    console.log(data);
});








// Coding the input commands as functions.

let ALLOCATE = function(){

};

let SIP = function (){

};

let CHANGE = function() {
    
};


let BALANCE =  function() {
    
};

let REBALANCE = function(){

};






// Printing the output to the console.