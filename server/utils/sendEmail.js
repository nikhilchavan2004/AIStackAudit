const { Resend } = require("resend");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

const sendEmail = async ({
  email,
  savings,
  recommendation,
}) => {

  try {

    await resend.emails.send({

      from: "AIStackAudit <onboarding@resend.dev>",

      to: email,

      subject: "Your AI Stack Audit Report",

      html: `
        <div style="font-family: sans-serif; padding: 20px;">

          <h1>AI Stack Audit Completed</h1>

          <p>
            We identified potential savings of
            <strong>$${savings}/month</strong>.
          </p>

          <p>
            Recommended Action:
            <strong>${recommendation}</strong>
          </p>

          <p>
            Thank you for using AIStackAudit.
          </p>

        </div>
      `,

    });

    console.log("Email sent");

  } catch (error) {

    console.log(error);

  }

};

module.exports = sendEmail;