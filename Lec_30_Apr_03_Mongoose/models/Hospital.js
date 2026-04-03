import mongoose from 'mongoose'

const docterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },
    location: String,
    capacity: Number,
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Docter'
    }],
    patients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    }],

}, {timestamps:true})

export const Docter = mongoose.model('Docter', docterSchema)