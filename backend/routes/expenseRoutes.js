const express = require('express');
const {protect} = require('../middlewares/authMiddleware')
const { addExpense , getAllExpense , deleteExpense , downloadExpenseExcel} = require('../controllers/expenseControllers')


const router = express.Router();

router.post('/add' ,protect , addExpense);
router.get('/get' ,protect , getAllExpense);
router.get('/download' ,protect ,  downloadExpenseExcel  );
router.delete('/:id' ,protect , deleteExpense);

module.exports = router;