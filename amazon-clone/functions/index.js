// Back End of the site

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors")
const stripe = require("stripe")('sk_test_51IqetrSE8kIgr16GyX3qE9XaSqTBmyRH3RTvMPbs1BDuOq6SoFK0bUEGb86Hytxrs0DNL3jnApAV993yqhwEG23r00m4w7xtf6');

// API

// App config
const app = express();

//Middlewares
app.use(cors({origin: true}));
app.use(express.json()) // allows to send data and pass data in the json format

// API routes
app.get('/', (request,response) => { response.status(200).send("Hello World")})
// app.get('/sruthi', (request,response) => { response.status(200).send("Hello sruthi")})
app.post('/payments/create', async(request, response) => {
    const total = request.query.total;
    // console.log('Payment request received VOILA!!! for this amount ', total);
//rupee vs usd
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });

    // console.log(payementIntent.clientSecret)
    // Created
    response.status(200).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/hybrid-saga-258704/us-central1/api

