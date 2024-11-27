require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

const TheaterRoutes = require("./theater/routes");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.use("/theaters", TheaterRoutes);

