const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/restuarantApp',{
}).then(()=>{
    console.log("Connected to DB")
});
module.exports = mongoose