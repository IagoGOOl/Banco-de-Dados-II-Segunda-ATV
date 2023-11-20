const express = require('express');

const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

const OcorrenciaRouter = require('./router/router');
app.use('/ocorrecia');
