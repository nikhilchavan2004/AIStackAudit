const auditEngine = (data) => {
  const {
    tool,
    plan,
    spend,
    seats,
    teamSize,
    useCase,
  } = data;

  let savings = 0;
  let recommendation = "";
  let reason = "";

  // ChatGPT Enterprise → Plus downgrade
  if (
    tool === "ChatGPT" &&
    plan.toLowerCase().includes("enterprise") &&
    teamSize <= 10
  ) {
    savings = Math.round(spend * 0.35);

    recommendation = "Switch to ChatGPT Team or Plus";

    reason =
      "Enterprise plans are often unnecessary for small teams. Team or Plus plans provide similar value at significantly lower cost.";
  }

  // ChatGPT Team optimization
  else if (
    tool === "ChatGPT" &&
    plan.toLowerCase().includes("team") &&
    teamSize < 8
  ) {
    savings = Math.round(spend * 0.2);

    recommendation = "Reduce Team Seats or Switch to Plus";

    reason =
      "Small teams can reduce costs by consolidating seats or moving selected users to Plus plans.";
  }

  // Claude optimization
  else if (
    tool === "Claude" &&
    spend > 300
  ) {
    savings = Math.round(spend * 0.25);

    recommendation = "Optimize Claude Usage";

    reason =
      "Current Claude usage appears high relative to team size and may benefit from usage consolidation.";
  }

  // Notion AI optimization
  else if (
    tool === "Notion AI" &&
    seats > teamSize
  ) {
    savings = Math.round(spend * 0.15);

    recommendation = "Remove Unused Seats";

    reason =
      "Detected more purchased seats than active team members.";
  }

  // Default fallback
  else {
    savings = 0;

    recommendation =
      "Your current stack looks optimized";

    reason =
      "We could not identify any meaningful cost optimizations based on current inputs.";
  }

  return {
    currentSpend: spend,
    savings,
    recommendation,
    reason,
  };
};

module.exports = auditEngine;