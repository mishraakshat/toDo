const mongoose = require('mongoose');


const DetailsSchema = new mongoose.Schema({
    task: {
        type : String,
        require : true
    },

    deadline: {
        type: String,
        require : true
    },

    catogery: {
        type:String,
        require:true
    }

});

const Details = mongoose.model('Details', DetailsSchema);
module.exports = Details;