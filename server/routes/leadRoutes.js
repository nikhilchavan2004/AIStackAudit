const express = require("express");

const router = express.Router();

const Lead = require("../models/Lead");

router.post("/", async (req, res) => {

  try {

    const lead = await Lead.create(req.body);

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