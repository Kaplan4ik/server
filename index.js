const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/calculate', async (req, res) => {
  const { number } = req.body;

  const result = Math.pow(number, 2);

  res.status(200).send({ result });
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
