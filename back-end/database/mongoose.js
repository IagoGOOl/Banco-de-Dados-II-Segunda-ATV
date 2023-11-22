require('dotenv').config();
async function main() {
	await mongoose.connect(process.env.MONGO_URL);
	console.log('Conectado com o Mongo');
}

module.exports = { main, mongoose };