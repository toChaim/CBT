const express = require("express");
const api = express();
const bodyParser = require("body-parser");

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

const port = process.env.PORT || 8000;

const router = express.Router();

router.get("/", (req, res) => res.json({ message: "welcome to your mind." }));

api.use("/api", router);

api.listen(port);
console.log(`CBT-API listening on port:${port}`);
