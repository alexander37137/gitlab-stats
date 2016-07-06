import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import middleware from './middleware';
import api from './api';

var app = express();
app.server = http.createServer(app);

app.use(bodyParser.json({
	limit : '100kb'
}));

app.use(middleware());
app.use('/api', api());

app.server.listen(8080);

console.log(`Started on port ${app.server.address().port}`);

export default app;
