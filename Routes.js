const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const qs = require('qs');

const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'gsb',
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/get-type', function (req, res) {
	console.log('in get request');
	pool.getConnection(function (err, connection) {
		if(err) {
			console.log(err);
			return
		}

		connection.query('SELECT * FROM type_ff', function (err, results) {
			if (err) throw err;

			// Getting the 'response' from the database and sending it to our route. This is were the data is.
			res.send(results)
		});
	});
});

app.post('/post-type', function (req, res) {
	const label = req.body.label;
	const montant = req.body.montant;
	console.log('in post request');


	pool.getConnection(function (err) {
		if (err) throw new err;

		const sql = "INSERT INTO type_ff(label, montant) VALUES ('" + label + "', '" + montant + "')";
		pool.query(sql, function (err, result) {
			if (err) throw err;

			// console.log("1 record inserted, result : ");
			res.send(result)
		})
	});
});

app.listen(3000, () => {
	console.log('Server run on http://localhost:3000');
});