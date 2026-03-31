import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        min: 5,
        max: 20
    },
    status: {
        type: String,
        enum: ["pending", "process", "end"],
        default: 'pending'
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: [String],
    address: {
        street: String,
        zipcode: Number
    },
    phone: {
        type:Number,
        validate: {
            validator: function (v) {
                // Convert the number to a string to use the regex .test() method
                return /^[1-9]\d{9}$/.test(String(v)); // Regex for a 10-digit number, not starting with 0
            },
            message: props => `${props.value} is not a valid 10-digit number!`
        }
    }

}, {timeseries:true}) //createdat and updateat Datetime

export const User = mongoose.model('User',userSchema)


