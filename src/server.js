const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const ApplicationError = require("./app/errors/ApplicationError");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  if (err instanceof ApplicationError) {
    res.status(404).json(err);
  } else {
    res.status(500).json(err);
  }
});

app.listen(4000);
