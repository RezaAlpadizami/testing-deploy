const express = require('express')

const GuestNameController = require('../controller/guestName')

const router = express.Router();

router.get("/", GuestNameController.getNameGuest);

module.exports = router