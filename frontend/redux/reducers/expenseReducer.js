const initialState = {
    expenses: [],
    loading: false,
    error: null,
};

const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_EXPENSES_REQUEST':
        case 'ADD_EXPENSE_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_EXPENSES_SUCCESS':
            return { ...state, loading: false, expenses: action.payload };
        case 'ADD_EXPENSE_SUCCESS':
            return { ...state, loading: false, expenses: [...state.expenses, action.payload] };
        case 'FETCH_EXPENSES_FAILURE':
        case 'ADD_EXPENSE_FAILURE':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default expenseReducer;
