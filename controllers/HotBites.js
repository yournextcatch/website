const HotBite = require("../models/HotBite");

exports.index = async (req, res) => {
  const hotBites = await HotBite.find({});
  res.status(200).json(hotBites);
};
