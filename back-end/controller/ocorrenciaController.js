const ocorrenciaModel = require('../model/Ocorrencia');

async function listarOcorrencia(req, res) {
	const policia = await ocorrenciaModel.find({});
	res.status(200).send(policia);
}

async function criaOcorrencia(req, res) {
	const { titulo, tipo, data, hora, lat, lng } = req.body;

	const cordenada = {
		type: 'Point',
		coordinates: [lat, lng],
	};

	const ocorrencia = new ocorrenciaModel({
		titulo,
		tipo,
		data,
		hora,
		cordenada,
	  });

	ocorrencia
		.save()
		.then(() => {
			res.status(201).json(ocorrencia);
		})
		.catch((error) => {
			res.status(400).json({ erro: 'falha ao salvar.' });
			console.error(error);
		});
}

async function deletarCordenada(req, res) {
	const ocorrencia = await ocorrenciaModel.findById(req.params.id);

	if (!ocorrencia) {
		res.status(404).json({ erro: 'ocorrencia não encontrado' });
		return;
	}

	await ocorrencia.findByIdAndDelete(req.params.id);
	res.status(204).json({ mensagem: 'ocorrencia removido com sucesso' });
}

async function atualizarCordenada(req, res) {
	const { id } = req.params;
	const ocorrencia = await ocorrenciaModel.findById(id);

	if (!ocorrencia) {
		res.status(404).json({ erro: 'ocorrencia não encontrado' });
		return;
	}

	const result = await ocorrencia.findByIdAndUpdate(id, req.body, {
		new: true,
	});

	res.status(201).json(result);
}
async function buscarPorId(req, res) {
	const ocorrencia = await ocorrenciaModel.findById(req.params.id);

	if (!ocorrencia) {
		res.status(404).json({ erro: 'ocorrencia não encontrado' });
		return;
	}

	res.status(200).json(ocorrencia);
}

module.exports = {
	criaOcorrencia,
	listarOcorrencia,
	buscarPorId,
	atualizarCordenada,
	deletarCordenada,
};
