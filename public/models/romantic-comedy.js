const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate-v2');

const romanticComedySchema = mongoose.Schema({
    "name": String,
    "poster-image": String
});
romanticComedySchema.plugin(mongoosePaginate);

module.exports = mongoose.model("RomanticComedy",romanticComedySchema);