// MySQL Connection
import mysql from "mysql"


export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1114",
    database: "nemer_db",
    useOldPassword: true
});
db.connect((err) => {
    if (err) {
      console.log("ERROR:: " + err)
      return;
    }
    console.log("database connection successful!")
  });