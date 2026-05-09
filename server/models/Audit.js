const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({

  tool: String,

  plan: String,

  spend: Number,

  seats: Number,

  teamSize: Number,

  useCase: String,

  recommendation: String,

  savings: Number,

  annualSavings: Number,

  reason: String,

  aiSummary: String,

}, {
  timestamps: true,
});

module.exports = mongoose.model("Audit", auditSchema);