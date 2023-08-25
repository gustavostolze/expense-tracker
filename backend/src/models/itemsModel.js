const connectDB = require('./connection');

const getAllItems = async () => {
    const connection = await connectDB();
    const [categories] = await connection.query('SELECT * FROM items');

    return categories;
};

const createItem = async (item) => {
    const connection = await connectDB();
    const { id, date, category, title, value } = item;

    const query = 'INSERT INTO items(id, date, category, title, value) VALUES(?, ?, ?, ?, ?)'

    const [createdItems] = await connection.query(query, [id, date, category, title, value])
    return {insertId: createdItems.insertId};
};

const deleteItem = async (id) => {
    const connection = await connectDB();
    const [deletedItem] = await connection.query('DELETE FROM items WHERE id = ?', [id]);
    return deletedItem;
};

const updateItem = async (id, item) => {
    const connection = await connectDB();
    const { date, category, title, value } = item;
    const query = 'UPDATE items SET date = ?, category = ?, title = ?, value = ? WHERE id = ?';
    const [updatedItem] = await connection.query(query, [date, category, title, value, id]);

    return updatedItem;
};

module.exports = {
    getAllItems,
    createItem,
    deleteItem,
    updateItem
};