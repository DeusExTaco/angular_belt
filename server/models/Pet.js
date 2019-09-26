let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let petSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "This pet needs a name"],
        minlength: [3, "Name must be at least 3 characters"],
        default: ""
    },
    type: {
        type: String,
        trim: true, // trim will truncate strings from "this has spaces   " to "this has spaces"
        required: [true, "This pet needs a type"],
        minlength: [3, "Type must be at least 3 characters"],
        default: ""
    },
    description: {
        type: String,
        trim: true, // trim will truncate strings from "this has spaces   " to "this has spaces"
        required: [true, "This pet needs a description"],
        minlength: [3, "Description must be at least 3 characters"],
        default: ""
    },
    skill_1: {
        type: String,
        trim: true, // trim will truncate strings from "this has spaces   " to "this has spaces"
        default: ""
    },
    skill_2: {
        type: String,
        trim: true, // trim will truncate strings from "this has spaces   " to "this has spaces"
        default: ""
    },
    skill_3: {
        type: String,
        trim: true, // trim will truncate strings from "this has spaces   " to "this has spaces"
        default: ""
    }
}, {timestamps: true});

// make the model
mongoose.model('Pet', petSchema);