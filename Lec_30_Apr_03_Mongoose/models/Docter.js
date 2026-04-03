import mongoose from 'mongoose'


const docterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
        min: 3,
        max: 50
    },
    specialization: String,
    experience: Number,
    available: Boolean,
    hospitalId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital'
        }
    ],
    patients:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Patient'
        }
    ],


}, {timestamps:true})

export const Docter = mongoose.model('Docter', docterSchema)