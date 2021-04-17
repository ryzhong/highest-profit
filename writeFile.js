const fs = require('fs');

//writes data into data2.json
module.exports = (data) => {
    let dataJSON = JSON.stringify(data);
    fs.writeFileSync('data2.json', dataJSON)
}