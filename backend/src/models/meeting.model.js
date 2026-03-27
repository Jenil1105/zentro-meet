const {Schema} = require("mongoose");
const mongoose = require("mongoose");

const meetingSchema = new Schema({
    userId: {type: String},
    meetingCode: {type:String, required:true},
    date: {type: Date, default: Date.now, required:true},
    token: {type: String}
})

const Meeting = mongoose.model("meeting",meetingSchema);

module.exports = Meeting;
