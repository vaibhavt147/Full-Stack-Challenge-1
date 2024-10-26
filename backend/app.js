const express = require("express");
const dsaRoute = require("./routes/dsaRoute");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/healthcheck", (req, res) => {
  return res.status(200).send({
    message: `The Server is running in ${process.env.NODE_ENV} environment`,
  });
});

app.use("/dsa", dsaRoute);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
