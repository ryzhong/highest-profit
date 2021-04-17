const csv = require('csv-parser');
const fs = require('fs');

module.exports = (file, test) => {
    //An array to hold JSON formatted data
    let newData = [];
    //holds counters
    let totalCounter = 0;
    let newCounter = 0;

    fs.createReadStream(file)
        .pipe(csv()) //uses csv-parser to convert data into JSON format
        .on('data', row => { //counts total rows in CSV file
            totalCounter++;
        })
        .on('data', row => {    //Adds Obj to arr and skips over profits that are non-number 
            if (!isNaN(+row['Profit (in millions)'])) {
                newData.push(row)
                newCounter++;
            }
        })
        .on('end', () => {
            //logging total CSV rows, CSV rows with numbers in profit
            console.log(totalCounter)
            console.log(newCounter)
            if(test) test();
        });
}