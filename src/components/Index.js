import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//pages
import LoginPage from '../pages/LoginPage'
import Home from '../pages/Home'

const Stack = createStackNavigator();

function Index() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginPage}
                    options={{
                        title: "Bem-Vindo",
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                    }} />
                    <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Logado",
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Index;
