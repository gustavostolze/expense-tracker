const express = require('express');

const itemsController = require('./controllers/itemsController');
const categoriesController = require('./controllers/categoriesController');
const categoriesMiddlewares = require('./middlewares/category');
const itemsMiddlewares = require('./middlewares/item');

const router = express.Router();

// items routes
router.get('/items', itemsController.getAllItems);
router.post('/items',
    itemsMiddlewares.validateField,
    itemsController.createItem);
router.delete('/items/:id', itemsController.deleteItem);
router.put('/items/:id',
    itemsMiddlewares.validateUpdate,
    itemsController.updateItem,
);
// categories routes
router.get('/categories', categoriesController.getAllCategories);
router.post('/categories',
    categoriesMiddlewares.validateField,
    categoriesController.createCategorie
);
router.delete('/categories/:id', categoriesController.deleteCategorie);

module.exports = router;