const mongoose = require("mongoose");


const urlSchema = new mongoose.Schema({
    shortId : {
        type : String,
        require : true,
        unioque : true
    },
    redirectUrl : {
        type : String,
        require : true,
    },
    visitHistory : [{ timestamp : {
        type : Number
    }}]
},
{
    timestamp : true
});


const URL = mongoose.model("url",urlSchema);

module.exports = URL;