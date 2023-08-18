const categoriesModel = require('../models/categoriesModel');

const getAllCategories = async (request, response) => {
    const categories = await categoriesModel.getAllCategories();

    response.header('Access-Control-Allow-Origin', '*');
    
    response.status(200).json(categories);
};

module.exports = {
    getAllCategories,
}