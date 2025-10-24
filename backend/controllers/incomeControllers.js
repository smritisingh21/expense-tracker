
const xlsx = require('xlsx');
const Income = require('../models/income');

//Add income
exports.addIncome = async( req, res) => {
    const userId = req.user.id;
  try{
     const {icon ,source, amount, date} = req.body;
    if(!source || !amount || !date){
        return res.status(404).json({message : "All fields are required"})
    }

    const newIncome = new Income({
        userId , source , amount , date: new Date(date)
    })

    await newIncome.save();
    res.status(200).json(newIncome);
}catch(err){
    res.status(500).json({message : err.message})
}
}


//get all income
exports.getAllIncome = async( req, res) => {
    const userId = req.user.id;
    try{
        const income = await Income.find({ userId : userId}).sort({date: -1})
        res.json(income);
    }catch(err){
     res.status(500).json({message : err.message})
    }
}

//delete
exports.deleteIncome = async( req, res) => {
    const userId = req.user.id;
    try{
        await Income.findByIdAndDelete({ userId : userId})
        res.json({message : "Deletion successful"});
    }catch(err){
     res.status(500).json({message : err.message})
    }
}

exports.downloadIncomeExcel = async(req, res) =>{
    const userId = req.user.id;
      try{
        const income = await Income.find({ userId : userId}).sort({date: -1})
        
        const data = income.map((income) =>({
            source : income.source,
            amount : income.amount,
            date : income.date,
        }))
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(data);

        xlsx.utils.book_append_sheet( workbook , worksheet , "Income");
        xlsx.writeFile(workbook ,"IncomeDetails.xlsx");
        res.download('IncomeDetails.xlsx');
    }catch(err){
     res.status(500).json({message : err.message})
    }
}