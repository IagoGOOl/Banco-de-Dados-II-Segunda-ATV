const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json);

app.use(cors());

app.post();
app.get();
app.delete();
app.put();

app.listen(3000, () => {
	console('serve ON');
});
