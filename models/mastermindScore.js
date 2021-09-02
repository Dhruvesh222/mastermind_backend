const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mastermindScoreSchema = new Schema({
    time:{
        type:Number,
        require:true
    },
    score:{
        type:Number,
        require:true
    }
},{timestamps:true});

const mastermindScore = mongoose.model('mastermindScore',mastermindScoreSchema);

module.exports = mastermindScore;