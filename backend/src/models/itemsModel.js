const connectDB = require('./connection');

const getAllItems = async () => {
    const connection = await connectDB();
    const [categories] = await connection.query('SELECT * FROM categories');

    return categories;
};

module.exports = {
    getAllItems
};