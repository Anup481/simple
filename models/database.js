const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: {
        type: String,
        required: [true,'Name field is required']
    },
    rank: {
        type: String,
    },
    available: {
        type: Boolean,
        default: false
    }
})

const data = mongoose.model('data', dataSchema);
module.exports = data;