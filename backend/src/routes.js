const {Router} = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/Devs', DevController.index);
routes.post('/Devs', DevController.store);

routes.get('/Search', SearchController.index);

module.exports = routes;