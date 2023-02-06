const mongoose = require("mongoose");



const transactions= mongoose.Schema({
     savingAmount:{type:String,required:true},
     ExpenditureAmount:{type:String,required:true},
     Month:{type:String,required:true}
     
})
module.exports = mongoose.model('Transactions',transactions)