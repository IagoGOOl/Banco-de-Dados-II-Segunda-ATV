const mongoose = require('../database/mongoose');
const { Schema } = mongoose;

const ocorrenciaSchema = new Schema({
	titulo: String,
	data: Date,
	hora: String,
	tipo: {
		type: String,
		enum: ['Assalto', 'Furto', 'Homicidio', 'Latrocinio'],
		default: 'Assalto',
	},
	cordenada: {
		type: {
			type: String,
			enum: ['Point'],
			required: true,
		},
		coordinates: {
			type: [Number],
			required: true,
		},
	},
});

const Ocorrencia = mongoose.model('Evento', ocorrenciaSchema);

module.exports = Ocorrencia;
