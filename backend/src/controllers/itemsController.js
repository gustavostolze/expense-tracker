const itemsModel = require('../models/itemsModel');

const getAllItems = async (_request, response) => {
    const items = await itemsModel.getAllItems();

    response.header('Access-Control-Allow-Origin', '*');
    
    response.status(200).json(items);
};

const createItem = async (request, response) => {
    const createdItem = await itemsModel.createItem(request.body);
    
    response.header('Access-Control-Allow-Origin', '*');

    response.status(204).json(createdItem);
};

const deleteItem = async (request, response) => {
    const { id } = request.params;
    await itemsModel.deleteItem(id);
    return response.status(204).json();
};

const updateItem = async (request, response) => {
    const { id } = request.params;
    const updatedItem = await itemsModel.updateItem(id, request.body);

    return response.status(204).json(updatedItem);
};

module.exports = {
    getAllItems,
    createItem,
    deleteItem,
    updateItem
};