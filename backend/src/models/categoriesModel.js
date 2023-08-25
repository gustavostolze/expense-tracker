const connectDB = require('./connection');

const getAllCategories = async () => {
    const connection = await connectDB();
    const [categories] = await connection.query('SELECT * FROM categories');

    return categories;
};

const createCategorie = async (categorie) => {
    const [categorie_key] = Object.keys(categorie);
    const { title, color, expense } = categorie[categorie_key];
    const connection = await connectDB();

    const query = 'INSERT INTO categories(categorie_key, title, color, expense) VALUES (?, ?, ?, ?)';

    const [createdCategorie] = await connection.query(query, [categorie_key, title, color, expense]);

    return {insertId: createdCategorie.insertId};
};

const deleteCategorie = async (id) => {
    const connection = await connectDB();
    const [deletedCategorie] = await connection.query('DELETE FROM categories WHERE id = ?', [id]);
    return deletedCategorie; 
};


module.exports = {
    getAllCategories,
    createCategorie,
    deleteCategorie,
}