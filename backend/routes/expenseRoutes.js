const express = require('express');
const {protect} = require('../middlewares/authMiddleware')
const { addExpense , getAllExpense , deleteExpense , downloadExpenseExcel} = require('../controllers/expenseControllers')


const router = express.Router();

router.post('/add' ,protect , addExpense);
router.get('/get' ,protect , getAllExpense);
router.get('/downloadexcel' ,protect ,  deleteExpense );
router.delete('/:id' ,protect , downloadExpenseExcel);

module.exports = router;