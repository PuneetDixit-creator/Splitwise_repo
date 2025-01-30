import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  const handleLogout = () => {
    // Handle logout logic (e.g., clear user session)
    console.log('User logged out');
    navigation.navigate('LoginScreen'); // Navigate to Login Screen after logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});
