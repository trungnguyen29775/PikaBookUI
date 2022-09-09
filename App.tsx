import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './component/login/login';
import Register from './component/register/register';
import MainScreenOldUser from './component/home/home';
import BookDetails from './component/bookDetails/bookDetails';
import ChatScreen from './component/chatScreen/chatScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
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
      <Stack.Screen 
      name="MainScreenOldUser" 
      component={MainScreenOldUser} 
      options={{headerShown: false}}
       />
       <Stack.Screen 
      name="BookDetails" 
      component={BookDetails} 
      options={{headerShown: false}}
       />
       <Stack.Screen 
      name="ChatScreen" 
      component={ChatScreen} 
      options={{headerShown: false}}
       />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
