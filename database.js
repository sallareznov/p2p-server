module.exports = {

  var sqlite3 = require('sqlite3').verbose();
  var db = new sqlite3.Database('database.db');

  db.serialize(function() {

    db.run("CREATE TABLE if not exists user_data (filename TEXT, filepath TEXT)", function(err) {
      console.log(err + " : an error has occured.");
    });

  });

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

}
