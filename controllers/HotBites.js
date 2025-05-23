const HotBite = require("../models/HotBite");

module.exports = {
  index,
};

async function index(req, res) {
  try {
    const hotBites = await HotBite.find({});
    res.json(hotBites);
  } catch (error) {
    console.error("Error fetching hot bites:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
