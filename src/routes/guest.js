const express = require('express')

const GuestController = require('../controller/guest')

const router = express.Router();

router.get("/", GuestController.getAllMessage);
router.post("/", GuestController.createPostGuest);

module.exports = router