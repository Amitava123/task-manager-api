const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mitraamitava7@gmail.com',
        subject: 'Thanks for Joining',
        text: `Welcome to the app, ${name}. Hope you like the app.`
    })
}

const sendCancelationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'mitraamitava7@gmail.com',
        subject: 'I am Sorry you had to leave',
        text: `Hello, ${name}, I feel sorry that you had to leave.`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelationMail
}