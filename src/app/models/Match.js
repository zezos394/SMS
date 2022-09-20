const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Match = new Schema({
    sta_id: { type: String, require:true },
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    booker: { type: String, required: true },
    booker_email: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
    date: { type: Date, required: true },
    time_group: { type: Number, required: true },
  },{
    timestamps: true,
  });
  module.exports = mongoose.model('Match', Match); 
  // model name , Schema name
  