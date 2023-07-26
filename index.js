require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require("express");
const cookieParser = require('cookie-parser');
const path = require('path');
// const bodyParser = require("body-parser");
const compression = require('compression');
const cors = require("cors");
const guestRoutes = require("./src/routes/guest");
const guestNameRoutes = require("./src/routes/guestName")

const middlewareLogRequest = require('./src/middleware/logs')

const app = express();
app.use(compression());

app.use(cookieParser());

app.use(express.static('public', { gzip: true }));

app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());

app.use("/guest", guestRoutes);
app.use("/guestname", guestNameRoutes);

app.get("/", (req, res) => {
  // Set a cookie with SameSite=None and Secure attributes
  res.cookie({
    sameSite: "none",
    secure: true,
});
  res.send("Cookie set successfully!");
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
