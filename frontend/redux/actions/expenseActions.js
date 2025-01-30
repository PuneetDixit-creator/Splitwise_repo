import axios from 'axios';

export const fetchGroupExpenses = (groupId) => async (dispatch) => {
    dispatch({ type: 'FETCH_EXPENSES_REQUEST' });
    try {
        const response = await axios.get(`http://localhost:5000/api/expenses/${groupId}`);
        dispatch({ type: 'FETCH_EXPENSES_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'FETCH_EXPENSES_FAILURE', payload: error.response.data.message });
    }
};

export const addExpense = (expenseData) => async (dispatch) => {
    dispatch({ type: 'ADD_EXPENSE_REQUEST' });
    try {
        const response = await axios.post('http://localhost:5000/api/expenses/add', expenseData);
        dispatch({ type: 'ADD_EXPENSE_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'ADD_EXPENSE_FAILURE', payload: error.response.data.message });
    }
};
