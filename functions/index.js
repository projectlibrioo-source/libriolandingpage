/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions/v2");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");


const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.




admin.initializeApp();

// Your email + app password
const gmailEmail = "projectlibrioo@gmail.com";
const gmailPassword = "jdwcwxlwyzgwphan";

// Setup Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Firestore Trigger Using v2 Syntax
exports.sendContactEmail = functions.firestore.onDocumentCreated(
    {
    region: "asia-south1"
  },
  "contactMessages/{docId}",
  async (event) => {
    const data = event.data.data();

    const mailOptions = {
      from: gmailEmail,
      to: gmailEmail,
      subject: `New Contact Message from ${data.name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Organization:</strong> ${data.organization}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      logger.info("Email Sent Successfully!");
    } catch (error) {
      logger.error("Error sending email:", error);
    }
  }
);
