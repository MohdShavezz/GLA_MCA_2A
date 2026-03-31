import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    },
    qty:Number

}, {timeseries:true}) //createdat and updateat Datetime

export const Order = mongoose.model('Order',orderSchema)


