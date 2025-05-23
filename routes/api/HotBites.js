// routes/api/HotBites.js
const express = require("express");
const router = express.Router();
const hotBiteCtrl = require("../../controllers/HotBites");

router.get("/", hotBiteCtrl.index);

router.post("/", hotBiteCtrl.createBite);

router.put("/:id", hotBiteCtrl.updateBite);

router.delete("/:id", hotBiteCtrl.deleteBite);

module.exports = router;
