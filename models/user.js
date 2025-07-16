const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username:String,
    email:String,
    paswordHash:String,
    role :{
        type: String,
        enum: ["admin"],
        default: "admin"
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
    
});

module.exports = mongoose.model("User", userSchema);
