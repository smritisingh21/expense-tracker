const express = require('express');
const {protect} = require('../middlewares/authMiddleware')
const { addIncome , getAllIncome , deleteIncome , downloadIncomeExcel} = require('../controllers/incomeControllers')


const router = express.Router();

router.post('/add' ,protect , addIncome);
router.get('/get' ,protect , getAllIncome);
router.get('/downloadexcel' ,protect ,  deleteIncome );
router.delete('/:id' ,protect , downloadIncomeExcel);

module.exports = router;