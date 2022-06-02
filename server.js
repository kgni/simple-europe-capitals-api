const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

const data = require('./data');

cors();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/api', (req, res) => {
	res.json(data);
});

app.get('/api/:country', (req, res) => {
	const country = req.params.country.toLowerCase();
	if (data[country]) {
		res.json(data[country]);
	} else {
		throw Error('Could not fetch, try again...');
	}
});

app.listen(process.env.PORT || PORT, () => {
	console.log(`RUNNING ON PORT ${PORT}`);
});
