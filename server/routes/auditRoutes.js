const express = require("express");

const router = express.Router();

const {
  generateAudit,
} = require("../controllers/auditController");

const Audit = require("../models/Audit");

router.post("/", generateAudit);

router.get("/:id", async (req, res) => {

  try {

    const audit = await Audit.findById(req.params.id);

    if (!audit) {
      return res.status(404).json({
        message: "Audit not found",
      });
    }

    res.status(200).json(audit);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }

});

module.exports = router;