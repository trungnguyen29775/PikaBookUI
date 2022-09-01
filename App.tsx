import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './component/login/login';
import Register from './component/register/register';

export default function App() {
  const Stack = createNativeStackNavigator();
  const MyTheme = {
    colors: {
      background: 'white'
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen 
      name="Register" 
      component={Register} 
      options={{headerShown: false}}
       />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
