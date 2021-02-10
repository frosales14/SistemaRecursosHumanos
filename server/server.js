const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world');
});

app.listen(3000, () => {
    console.log('Server is running');
});

//CONEXION A MYSQL

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'database-comex.cxisflzbs7ad.us-east-2.rds.amazonaws.com',
  user     : '',
  password : '',
  database : ''
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  else{
      console.log('CONEXION EXITOSA');
  }
});
 
connection.end();
