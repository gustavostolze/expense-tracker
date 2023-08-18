const itemsModel = require('../models/itemsModel');

const getAllItems = async (request, response) => {
    const items = await itemsModel.getAllItems();

    response.header('Access-Control-Allow-Origin', '*');
    
    response.status(200).json(items);
};

module.exports = {
    getAllItems
};