import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    useEffect(() => {
        // This will run once when the component is mounted
        console.log('LoginScreen rendered');
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            console.log(res.data);
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <View style={styles.container}>
            {/* Simple text to confirm screen load */}
            <Text>Login Screen</Text>
            
            <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
                style={styles.input} 
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
            <Text onPress={() => navigation.navigate('SignupScreen')}>
                Don't have an account? Sign up
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 },
});

export default LoginScreen;

