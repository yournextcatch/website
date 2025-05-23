const HotBite = require("../models/HotBite");

module.exports = {
  index,
  createBite,
  updateBite,
  deleteBite,
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

async function createBite(req, res) {
  try {
    const newBite = await HotBite.create(req.body);
    res.json(newBite);
  } catch (error) {
    console.error("Error creating HotBite: ", error);
    res.status(400).json(error);
  }
}

async function updateBite(req, res) {
  try {
    const updatedBite = await HotBite.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBite);
  } catch (error) {
    res.status(400).json(error);
  }
}

async function deleteBite(req, res) {
  try {
    const hotBite = await HotBite.findOneAndDelete({ _id: req.params.id });
    res.json(hotBite);
  } catch (error) {
    res.status(400).json(error);
  }
}
