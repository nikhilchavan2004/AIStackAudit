const auditEngine = require("../utils/auditEngine");

const generateAudit = async (req, res) => {

  try {

    const result = auditEngine(req.body);

    res.status(200).json(result);

  } catch (error) {

    res.status(500).json({
      message: "Server Error",
    });

  }

};

module.exports = {
  generateAudit,
};