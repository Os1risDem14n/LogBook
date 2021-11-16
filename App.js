import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Index from './Main/Index'
import CreateHome from './Main/Create'
import Notification from './Main/Notification'


const CT = createStackNavigator();

function CtNavigator() {
  return (
    <CT.Navigator>
      <CT.Screen
      options={{
        title: "Home",
        }}
      name="Index" 
      component={Index} 
      />
      <CT.Screen  
      options={{
        title: "Notification",
        }}
      name="Notification" 
      component={Notification} 
      />
      <CT.Screen 
      options={{
        title: "Create House Information",
        }}
      name="Create" 
      component={CreateHome} 
      />
    </CT.Navigator>
  );
  
}

export default function App() {
  return (
    <NavigationContainer>
      <CtNavigator/>
    </NavigationContainer>
  );
}
