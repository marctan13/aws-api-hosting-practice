const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  "access-control-allow-credentials": true,
  optionSuccessStatus: 200,
};

// Sets CORS to allow incoming requests from different places (i.e. a different port)
app.use(cors(corsOptions));

// Makes Express parse the JSON body of any requests and adds the body to the req object
app.use(bodyParser.json());

app.get("/car", (req, res) => {
  const cars = [
    {
      make: "Honda",
      model: "Civic",
      year: 2010,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2010,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2010,
    },
  ];

  res.json(cars)
});

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));