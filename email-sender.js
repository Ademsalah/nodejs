const nodemailer = require("nodemailer");

const html = `<h1>Hello world</h1>
              <p>Isn't nodeMailer useful</p>`;

async function main() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'adem.hameed.123@gmail.com',
            pass: '************'
        }
    });
    const info = await transporter.sendMail({
        from: 'adem.hameed.123@gmail.com',
        to: 'salahadem817@gmail.com',
        subject: 'Hello, hello, From Earth',
        html: html,
    })
    console.log("Message sent: ", info.messageId);
}
main().catch(e => console.log(e));

module.exports.emailSender = main;