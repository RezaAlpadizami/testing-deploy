require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const guestRoutes = require("./src/routes/guest");
const guestNameRoutes = require("./src/routes/guestName")

const middlewareLogRequest = require('./src/middleware/logs')

const app = express();

app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());

app.use("/guest", guestRoutes);
app.use("/guestname", guestNameRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
