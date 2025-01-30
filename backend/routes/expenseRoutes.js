const express = require('express');
const { addExpense, getGroupExpenses } = require('../controllers/expenseController');
const router = express.Router();

router.post('/add', addExpense);
router.get('/:groupId', getGroupExpenses);

module.exports = router;
