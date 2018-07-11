// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  process.env.CLEARDB_DATABASE_URL

  // host: "localhost" || "us-cdbr-iron-east-04.cleardb.net",
  // //port: 3306,
  // user: "root" || "b350f1ad0a79f6",
  // password: "Martel83" || "05eb9721",
  // database: "burgerss_db" || "heroku_901a690d2f04ae0"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
//CLEARDB_DATABASE_URL: mysql://b350f1ad0a79f6:05eb9721@us-cdbr-iron-east-04.cleardb.net/heroku_901a690d2f04ae0?reconnect=true