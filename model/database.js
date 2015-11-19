var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database.db');

function createTable() {
  db.run("CREATE TABLE if not exists user_data (filename TEXT PRIMARY KEY, filepath TEXT)", function(err) {
    console.log(err + " : an error has occured.");
  });
}

function getFile(filename) {
  return db.get("SELECT filepath WHERE filename=?", filename);
}

function saveFile(filename, filepath) {
  db.run("INSERT INTO user_data VALUES(?, ?)", filename, filepath);
}

function getAllDatas() {
  db.all("SELECT * FROM  user_data", function (err, rows) {
    rows.forEach(function (row) {
      console.log(row.filename, row.filepath);
    });
  });
}

function close() {
  db.close(function(err) {
    if (err == null)
    console.log("Error in the closing of your database.");
  });
}

exports.createTable = createTable;
exports.getFile = getFile;
exports.saveFile = saveFile;
exports.getAllDatas = getAllDatas;
exports.close = close;
