const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
  },

  company: {
    type: String,
  },

  role: {
    type: String,
  },

  auditId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Audit",
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model("Lead", leadSchema);