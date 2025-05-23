// routes/api/HotBites.js
const express = require("express");
const router = express.Router();
const hotBiteCtrl = require("../../controllers/HotBites");

router.get("/", hotBiteCtrl.index); // responds to GET /api/hotbites/

module.exports = router;
