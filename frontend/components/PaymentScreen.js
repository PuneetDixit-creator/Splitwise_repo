import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const handlePayment = async () => {
        const response = await fetch('http://localhost:5000/api/payments/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: 100, currency: 'usd' }),
        });
        const { clientSecret } = await response.json();

        await initPaymentSheet({ paymentIntentClientSecret: clientSecret });
        const result = await presentPaymentSheet();

        if (result.error) {
            alert(`Error: ${result.error.message}`);
        } else {
            alert('Payment Successful');
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Pay Now" onPress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default PaymentScreen;
