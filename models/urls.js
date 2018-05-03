const mongoose = require('mongoose');
const { Schema } = mongoose;

const urlSchema = new Schema({
    originalUrl: {type:String, required:true},
    terseUrl: {type:String, required:true, unique:true}
});

mongoose.model('ShortUrl', urlSchema);