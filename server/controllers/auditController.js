const auditEngine = require("../utils/auditEngine");

const generateSummary = require("../utils/generateSummary");

const Audit = require("../models/Audit");

const generateAudit = async (req, res) => {

  try {

    // Generate audit logic

    const result = auditEngine(req.body);

    // Generate AI summary

    const aiSummary = await generateSummary(result);

    // Save audit in MongoDB

    const savedAudit = await Audit.create({

      ...req.body,

      recommendation: result.recommendation,

      savings: result.savings,

      annualSavings: result.annualSavings,

      reason: result.reason,

      aiSummary,

    });

    // Return response

    res.status(200).json({

      ...result,

      aiSummary,

      auditId: savedAudit._id,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  generateAudit,
};