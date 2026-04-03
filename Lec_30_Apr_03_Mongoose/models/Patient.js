import mongoose from 'mongoose'


const patientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        min:3,
        max:50
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['male', 'female', 'other']        
    },
    disease:String,
    admitted:Boolean,
     phone: {
        type:Number,
        validate: {
            validator: function (v) {
                // Convert the number to a string to use the regex .test() method
                return /^[1-9]\d{9}$/.test(String(v)); // Regex for a 10-digit number, not starting with 0
            },
            message: props => `${props.value} is not a valid 10-digit number!`
        }
    },
    address:{
        city:String,
        pincode:Number
    }    

},{timestamps:true})

export const Patient=mongoose.model('Patient',patientSchema)