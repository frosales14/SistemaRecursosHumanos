const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

//IMPORTAR VARIABLES DE ENTORNO
dotenv.config();

//CONEXION A MYSQL

const SELECT_ALL_USERS_QUERY = 'SELECT * FROM administrador';
const SELECT_ALL_APPLICANTS_QUERY = 'SELECT * FROM aplicante';
const SELECT_APPLICANTS_BY_SCORE =
    'SELECT apl.id, apl.nombre, vac.nombre AS vacante, aple.puntuacion FROM aplicante AS apl INNER JOIN aplicantes_por_evaluacion AS aple ON apl.id = aple.aplicante_id INNER JOIN aplicantes_por_vacante AS aplv ON apl.id = aplv.vacante_id INNER JOIN vacante AS vac ON aplv.vacante_id = vac.id;';
const SELECT_VACANCIES =
    'SELECT id, nombre, descripcion, totalvacantes, ciudad FROM vacante';
const SELECT_VACANCIES_BY_AMOUNT =
    "SELECT vacante.nombre AS 'Nombre de vacante', SUM(totalvacantes) AS 'Vacantes disponibles' FROM vacante GROUP BY vacante.nombre ORDER BY 'Vacantes disponibles'";
const SELECT_VACANCIES_BY_CITY =
    "SELECT vacante.nombre AS 'Nombre de vacante', vacante.ciudad AS 'Ciudad', SUM(totalvacantes) AS 'Vacantes disponibles' FROM vacante GROUP BY vacante.nombre, vacante.ciudad ORDER BY 'Nombre de vacante'";

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
                data: results,
            });
        }
    });
});

app.get('/aplicantes-por-puntuacion', (req, res) => {
    connection.query(SELECT_APPLICANTS_BY_SCORE, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                aplicantes: results,
            });
        }
    });
});

app.get('/vacantes/add', (req, res) => {
    {
        const {
            nombre,
            descripcion,
            departamento,
            totalVacantes,
            ciudad,
            id,
            admin,
        } = req.query;
        const INSERT_VACANTES_QUERY = `INSERT INTO vacante (nombre,descripcion,departamento,totalvacantes,ciudad,evaluacion_id,administrador_usuario) VALUES ('${nombre}', '${descripcion}', '${departamento}', '${totalVacantes}', '${ciudad}', '${id}', '${admin}')`;
        connection.query(INSERT_VACANTES_QUERY, (err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.send('vacante agregado exitosamente');
            }
        });
    }
});

app.get('/vacantes', (req, res) => {
    connection.query(SELECT_VACANCIES, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results,
            });
        }
    });
});

app.get('/vacantes-por-cantidad', (req, res) => {
    connection.query(SELECT_VACANCIES_BY_AMOUNT, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results,
            });
        }
    });
});

app.get('/vacantes-por-ciudad', (req, res) => {
    connection.query(SELECT_VACANCIES_BY_CITY, (err, results) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json({
                data: results,
            });
        }
    });
});

app.get('/vacantes/:cantidad', (req, res) => {
    connection.query(
        'SELECT id, nombre, descripcion, ciudad FROM vacante WHERE totalvacantes = ?',
        [req.params.cantidad],
        (err, rows, fields) => {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }
        }
    );
});

app.get('/administrador', (req, res) => {
    connection.query('SELECT * FROM administrador', (err, rows, fields) => {
        if (!err) res.send(rows);
        else console.log(err);
    });
});

app.get('/aplicante', (req, res) => {
    connection.query(
        'SELECT nombre, email, fecha_nacimiento FROM aplicante',
        (err, rows, fields) => {
            if (!err) res.send(rows);
            else console.log(err);
        }
    );
});

app.listen(4000, () => {
    console.log('Server is running');
});
