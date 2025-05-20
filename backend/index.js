require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionsModel } = require('./models/PositionsModel');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3002; // In production, hosting platforms (like Heroku, Render, or Vercel) usually assign a port via process.env.PORT.
const uri = process.env.MONGO_URL;

app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.use(bodyParser.json());

// app.get('/addHoldings', async(req, res) => {
//     let tempHoldings = [
//   {
//     name: "TCS",
//     qty: 5,
//     avg: 3245.10,
//     price: 3310.75,
//     net: "+2.02%",
//     day: "-0.15%",
//   },
// ];
    
//           tempHoldings.forEach((item) => {
//             let newHolding = new HoldingsModel(item);
//             newHolding.save();
//           });
//         res.send('Holdings were inserted into database!')
// })

// app.get('/addPositions', async (req, res) => {
//     const tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//           },
//           {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//           },
//     ];
//     tempPositions.forEach((position) => {
//         let newPosition = new PositionsModel(position);
//         newPosition.save();
//     })
//     res.send('Positions were inserted into database!')
// });

// app.get('/addOrders', (req, res) => {
//     const tempOrders = orders;
//     tempOrders.forEach((order) => {
//         console.log(tempOrders);
//         let newOrder = order;
//         newOrder.save();

//     })
//     res.send('Orders were inserted into database!')
    
// })

app.get('/allHoldings', async(req, res) => {
    let allHoldings = await HoldingsModel.find({}); // {} means fetch everything
    res.json(allHoldings);
});

app.get('/allPositions', async(req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

app.get('/', (req, res) => {
    res.send('Home for all zerodha API calls.');
})

app.listen(PORT, () => {
    console.log('Server is listening at port 3002.');
    mongoose.connect(uri);
    console.log("Connected to DB");
});