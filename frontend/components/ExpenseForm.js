import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { addExpense } from '../redux/actions/expenseActions';

const ExpenseForm = ({ groupId }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const expenseData = {
            groupId,
            description,
            amount: parseFloat(amount),
            paidBy: 'USER_ID', // Replace with logged-in user ID
            sharedAmong: ['USER_ID_1', 'USER_ID_2'], // Replace with group members
        };
        dispatch(addExpense(expenseData));
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
                style={styles.input}
            />
            <TextInput
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                keyboardType="numeric"
                style={styles.input}
            />
            <Button title="Add Expense" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 },
});

export default ExpenseForm;
