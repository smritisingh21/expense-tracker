const mongoose = require("mongoose");

 const ExpenseSchema = new mongoose.Schema({
    userId :{
        type : mongoose.Schema.ObjectId,
        ref:'user',
        required : true
    },
    icon:{type : String},
    source : {type : String, required : true},
    amount : {type : String, required : true},
    category : {type : String, required : true},
    date : {type :Date , default : Date.now},
 },{
    timestamps: true
 }
)

mongoose.exports = mongoose.model("Expense" , ExpenseSchema)
