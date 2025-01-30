import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';

const Stack = createStackNavigator();


export default function App() {
    console.log('App component rendered');
    return (
              <NavigationContainer>
                <Stack.Navigator initialRouteName="LoginScreen">
                  <Stack.Screen name="LoginScreen" component={LoginScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            );
          }
          
