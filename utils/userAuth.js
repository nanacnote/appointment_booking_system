var readFromFile = require("./readFromFile");

/**
 * handles authentication checking
 *
 * @param {object} param param={email, password}
 */
async function userAuth({ email, password }) {
  var dbCollection = await readFromFile();
  var match = [];

  if (dbCollection) {
    var dbEntries = Object.values(dbCollection);
    var match = dbEntries.filter(
      (user) => user.email === email && user.password === password
    );
  }
  return !!match.length;
}

module.exports = userAuth;
