const categoriesModel = require('../models/categoriesModel');

const getAllCategories = async (request, response) => {
    const categories = await categoriesModel.getAllCategories();

    response.header('Access-Control-Allow-Origin', '*');
    
    response.status(200).json(categories);
};

const createCategorie = async (request, response) => {
    const createdCategorie = await categoriesModel.createCategorie(request.body);

    response.header('Access-Control-Allow-Origin', '*');
    
    return response.status(204).json(createdCategorie);
};

const deleteCategorie = async (request, response) => {
    const { id } = request.params;
    await categoriesModel.deleteCategorie(id);
    return response.status(204).json();
};

module.exports = {
    getAllCategories,
    createCategorie,
    deleteCategorie,
}