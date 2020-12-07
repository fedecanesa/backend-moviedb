const mongoose = require("mongoose");

const requestlogSchema = new mongoose.Schema({
    search: {type: String},
    date: {type: Date},
    ip: {type: String}
})
module.exports = mongoose.model("Requestlog", requestlogSchema);