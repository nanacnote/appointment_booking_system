var fs = require("fs");

/**
 * handles extending text file with new user details
 *
 * @param {string} newData
 */
function writeToFile(newData) {
  fs.readFile("copy/userDetails.txt", "utf8", function (err, data) {
    let parsedData = {};
    if (err) console.warn(err);
    if (data) {
      var currentDataObj = JSON.parse(data);
      parsedData = { ...currentDataObj, [newData.email]: { ...newData } };

      var currentDataStr = JSON.stringify(parsedData);
      fs.writeFile("copy/userDetails.txt", currentDataStr, function (err) {
        if (err) console.warn(err);
        console.log("user details saved to file!");
      });
    }
  });
}

module.exports = writeToFile;
