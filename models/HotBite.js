const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotBiteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("HotBite", hotBiteSchema);
