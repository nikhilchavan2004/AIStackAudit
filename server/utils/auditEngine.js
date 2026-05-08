const auditEngine = ({
  tool,
  plan,
  spend,
  seats,
  teamSize,
  useCase,
}) => {

  let recommendation = "";
  let savings = 0;
  let reason = "";

  // CHATGPT LOGIC

  if (
    tool === "ChatGPT" &&
    plan.toLowerCase().includes("team") &&
    Number(seats) <= 2
  ) {
    recommendation = "Switch to ChatGPT Plus";
    savings = Number(spend) - 40;

    reason =
      "Team plan is expensive for small teams. Plus plan provides similar value at lower cost.";
  }

  // CURSOR LOGIC

  else if (
    tool === "Cursor" &&
    plan.toLowerCase().includes("business") &&
    Number(seats) <= 3
  ) {
    recommendation = "Downgrade to Cursor Pro";

    savings = Number(spend) - 60;

    reason =
      "Cursor Business is optimized for larger organizations with collaboration needs.";
  }

  // CLAUDE LOGIC

  else if (
    tool === "Claude" &&
    useCase === "Writing"
  ) {
    recommendation = "Consider Claude Pro instead of higher enterprise tiers";

    savings = Number(spend) * 0.25;

    reason =
      "Writing-focused workflows generally do not require enterprise-grade AI infrastructure.";
  }

  // COPILOT LOGIC

  else if (
    tool === "GitHub Copilot" &&
    teamSize < 3
  ) {
    recommendation = "Use individual Copilot plans";

    savings = Number(spend) * 0.20;

    reason =
      "Small engineering teams usually benefit more from individual plans.";
  }

  // FALLBACK

  else {
    recommendation = "Your current stack looks optimized";

    savings = 0;

    reason =
      "We could not identify any meaningful cost optimizations based on current inputs.";
  }

  return {
    currentSpend: Number(spend),
    recommendation,
    savings: Math.max(0, Math.round(savings)),
    annualSavings: Math.max(0, Math.round(savings * 12)),
    reason,
  };
};

module.exports = auditEngine;