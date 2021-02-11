const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const app = express();

dotenv.config();

//CONEXION A MYSQL

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
});
 
connection.connect();

connection.connect(err => {
  if (err) {
      console.log('Not connected to Database');
      return err;
  } else {
      console.log('Connected to the SQL server');
  }
});

app.use(cors());

app.get('/', (req, res) => {
  res.send("Hello World");
});
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   else{
//       console.log('CONEXION EXITOSA');
//   }
// });
 
// connection.end();

app.listen(3000, () => {
  console.log('Server is running');
});
