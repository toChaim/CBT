// modules
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// config settings
const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost/CBT-API';
const port = process.env.PORT || 8000;

// set api
const api = express();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

// set routs
router.get('/', (req, res) => res.json({ message: 'welcome to your mind.' }));
api.use('/api', router);

// connect to db
mongoose.connect(mongoDB, { useMongoClient: true });

api.listen(port, () => {
  console.log(`CBT-API listening on port:${port}`);
});
