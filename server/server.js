const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

//IMPORTAR VARIABLES DE ENTORNO
dotenv.config();

//CONEXION A MYSQL

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM administrador';
const SELECT_ALL_APPLICANTS_QUERY = 'SELECT * FROM aplicante';

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
});

connection.connect((err) => {
    if (err) {
        console.log(`${err} - Not Connected to MySQL`);
        return err;
    } else {
        console.log('Connected to MySQL');
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    connection.query(SELECT_ALL_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results,
            });
        }
    });
});

app.get('/users/add', (req, res) => {
    const { usuario, contrasena } = req.query;
    console.log(req.query);
    const INSERT_USERS_QUERY = `INSERT INTO administrador (usuario,contrasena) VALUES ('${usuario}', '${contrasena}')`;
    connection.query(INSERT_USERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.send('succesfully added user');
        }
    });
});

app.get('/aplicantes', (req, res) => {
  connection.query(SELECT_ALL_APPLICANTS_QUERY, (err, results) => {
      if (err) {
          return res.send(err);
      } else {
          return res.json({
              data: results
          });
      }
  });
});
 

app.listen(4000, () => {
    console.log('Server is running');
});

app.get('/administrador',(req,res)=>{
    mysqlConnection.query('SELECT * FROM administrador',(err,rows,fields)=>{
         if(!err)
         res.send(rows);
         else
         console.log(err);
    })
});

app.get('/aplicante',(req,res)=>{
    mysqlConnection.query('SELECT nombre, email, fecha_nacimiento FROM aplicante',(err,rows,fields)=>{
         if(!err)
         res.send(rows);
         else
         console.log(err);
    })
});
