const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchDevController = require('./controllers/SearchDevController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search-dev', SearchDevController.index)

module.exports = routes;
