const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  key:{type:Number,unique:true},
  competition:String,
  matchday:String,
  homeTeam:String,
  awayTeam:String,
 date:String,
 round:String,
 gamblingUsers:{type:Array,default:[]},
 firstTeam:{type:Number,default:0},
 draw:{type:Number,default:0},
 secondTeam:{type:Number,default:0},

  

 
});

const Match = mongoose.model("match", matchSchema);

module.exports = {
  Match,
};
