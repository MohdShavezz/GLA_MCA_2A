import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        min: 5,
        max: 20
    },
    price:Number,
    description:String  

}, {timeseries:true}) //createdat and updateat Datetime

export const Product = mongoose.model('Product',productSchema)


