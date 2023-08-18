const mysql = require('mysql2/promise');
require('dotenv').config();

const connectDB = async () => {
	const connection = mysql.createConnection('mysql://root:5Zh2VExmHcfp2lVXRaGM@containers-us-west-80.railway.app:6989/railway');
	console.log('Entrando no banco de dados...');
	return connection;
};

module.exports = connectDB;