import { Router } from 'express';

export default function() {
	var api = Router();

	api.get('/', (req, res) => {
		res.json({
			version : '1.0'
		});
	});

	return api;
}
