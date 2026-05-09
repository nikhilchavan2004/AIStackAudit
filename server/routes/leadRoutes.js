const express = require("express");

const router = express.Router();

const Lead = require("../models/Lead");
const Audit = require("../models/Audit");

const sendEmail = require("../utils/sendEmail");
router.post("/", async (req, res) => {

  try {

    const lead = await Lead.create(req.body);

    // Get audit data

    const audit = await Audit.findById(
      req.body.auditId
    );

    // Send email

    await sendEmail({
      email: req.body.email,
      savings: audit.savings,
      recommendation: audit.recommendation,
    });

    res.status(201).json({
      success: true,
      lead,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
    });

  }

});

module.exports = router;