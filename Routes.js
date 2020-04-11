const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gsb'
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/get-type', function (req, res) {
    connection.getConnection(function (err, connection) {
        connection.query('SELECT * FROM type_ff', function (error, results) {
            if (error) throw error;

            res.send(results)
        });
    });
});

app.post('/post-type', function (req, res) {
    const label = req.body.label;
    const montant = req.body.montant;

    connection.getConnection(function (error) {
        if (error) throw error;

        const sql = "INSERT INTO type_ff(label, montant) VALUES ('" + label + "', '" + montant + "')";
        connection.query(sql, function (error) {
            if (error) throw error;

            res.send('POST Request')
        })
    });
});

app.listen(3000, () => {
    console.log('Server run on http://localhost:3000');
});