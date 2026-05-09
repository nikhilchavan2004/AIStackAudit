const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateSummary = async (auditResult) => {

  try {

    const prompt = `
    You are an AI SaaS optimization expert.

    Create a concise professional audit summary.

    Current Spend: ${auditResult.currentSpend}
    Savings: ${auditResult.savings}
    Recommendation: ${auditResult.recommendation}
    Reason: ${auditResult.reason}
    `;

    const completion = await openai.chat.completions.create({

      model: "gpt-3.5-turbo",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

    });

    return completion.choices[0].message.content;

  } catch (error) {

    console.log(error);

    return `
    Your AI stack has optimization opportunities worth approximately
    $${auditResult.savings} per month.
    `;
  }

};

module.exports = generateSummary;