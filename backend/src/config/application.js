const express = require('express');
const bodyParser = require('body-parser');

const port = 3003;
const application = express();
const cors = require('./cors');

application.use(bodyParser.urlencoded({extended: true}));
application.use(bodyParser.json());
application.use(cors);

application.listen(port, () => console.log(`BACKEND is running on port ${port}.`));

module.exports = application;
