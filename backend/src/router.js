const express = require('express');

const itemsController = require('./controllers/itemsController');
const categoriesController = require('./controllers/categoriesController');

const router = express.Router();

// items routes
router.get('/items', itemsController.getAllItems);
// categories routes
router.get('/categories', categoriesController.getAllCategories);

module.exports = router;