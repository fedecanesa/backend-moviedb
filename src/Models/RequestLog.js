const mongoose = require("mongoose");

const requestlogSchema = new mongoose.Schema({
    search: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model("RequestLogs", requestlogSchema);