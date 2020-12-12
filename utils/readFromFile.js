var fs = require("fs");

/**
 * Read db file async
 */
function asyncRead() {
  return new Promise((resolve, reject) => {
    fs.readFile("copy/userDetails.txt", "utf8", function (err, data) {
      if (err) {
        console.warn(err);
        reject("Error!");
      }
      if (data) {
        resolve(JSON.parse(data));
      }
    });
  });
}

/**
 * handles extending text file with new user details
 */
async function readFromFile() {
  let results = await asyncRead();
  return results;
}

module.exports = readFromFile;
