const nodemailer = require("nodemailer")
const nodemailerConfig = require('./nodemailerConfig')

const sendEmail = async ({to, subject, html}) => {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport(nodemailerConfig)

    return await transporter.sendMail({
        from: '"Test User" <white@mail.com>', // sender address
        to, // list of receivers
        subject, // Subject line
        html, // html body
    });

    // res.send(info)
}

module.exports = sendEmail