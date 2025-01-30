const Expense = require('../models/Expense');
const Group = require('../models/Group');

exports.addExpense = async (req, res) => {
    const { groupId, description, amount, paidBy, sharedAmong } = req.body;

    try {
        const expense = await Expense.create({
            groupId,
            description,
            amount,
            paidBy,
            sharedAmong,
        });

        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getGroupExpenses = async (req, res) => {
    const { groupId } = req.params;

    try {
        const expenses = await Expense.find({ groupId }).populate('paidBy sharedAmong');
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
