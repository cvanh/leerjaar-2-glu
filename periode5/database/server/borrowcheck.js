/*
please onnly run this file with a cron job
*/

const { db_find } = require("./utils/database");
require("dotenv").config({
    path: ".env",
  });

const nodemailer = require('nodemailer');


// shameless stolen from https://www.w3schools.com/nodejs/nodejs_email.asp archive.org link is made
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.gmailusername,
    pass: process.env.gmailpassword
  }
});


async function check(){
    const CurrentEpoch = Date.now()
    
    // this will use the current unix epoch in miliseconds + 4 weeks 
    const CurrentEpoch4weeks = CurrentEpoch + 2419200000
    console.log(`bitch ${CurrentEpoch4weeks}`)

    //gets all the books that have been later then 4 weeks 
    const result = await db_find('books',{"borrow.date" : { "$lt" : CurrentEpoch4weeks}})

    // loops trough 
    for (let index = 0; index < result.length; index++) {
        console.log(result[index])
        var mailOptions = {
            from: 'horsecockseller@gmail.com',
            to: result[index].borrow.email,
            subject: 'NOTICE: book(s) need to be returned',
            text: `
            Dear recipeint,

            please note the following book(s) with the isbn: ${result[index].isbn13} and the name ${result[index].title} need to be returned

            greatings
            `
          };


transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
    }


}

check()