const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Score = require('./models/mastermindScore');

const app = express();


// const dbURI = '';
// mongoose.connect(dbURI,{ useNewUrlParser: true,useUnifiedTopology: true })
// .then((result)=>{
//     console.log('connected to Database');
//     app.listen(3000);    
// })
// .catch((err)=>{
//     console.log(err);
// });

app.listen(3000);

app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('mastermind');
});

