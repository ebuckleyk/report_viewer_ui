import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './screens/sign_up';
import Signin from './screens/sign_in';

const Tab = createBottomTabNavigator();

export default function Authentication() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='SignIn' component={Signin} />
      <Tab.Screen name='SignUp' component={Signup} />
    </Tab.Navigator>
  )
}