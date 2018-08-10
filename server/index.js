const express = require('express');
const bodyParser = require('body-parser');

const c = require('./controller');

const app = express();
app.use(bodyParser.json());

app.listen(3032, () => console.log('Hard to port'))