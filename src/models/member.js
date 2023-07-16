const { Schema, model } = require("mongoose");

const memberSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const member = model("member", memberSchema);

module.exports = member;