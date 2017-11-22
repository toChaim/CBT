const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/CBT-API');

const port = process.env.PORT || 8000;

const router = express.Router();

router.get('/', (req, res) => res.json({ message: 'welcome to your mind.' }));

api.use('/api', router);

api.listen(port);
console.log(`CBT-API listening on port:${port}`);
