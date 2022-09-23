import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './component/login/login';
import Register from './component/register/register';
import MainScreenOldUser from './component/home/mainScreenOldUser';
import MainScreenNewUser from './component/home/mainScreenNewUser';
import BookDetails from './component/bookDetails/bookDetails';
import ChatScreen from './component/chatScreen/chatScreen';
import ChatRoom from './component/chatRoom/chatRoom';
import NewUserChatScreen from './component/chatScreen/chatScreenNewUser';
import Notifications from './component/notification/notifications';
import WriteScreenBlank from './component/write/writeScreenBlank';
import WriteScreen from './component/write/writeScreen';
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
       <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoom} 
      options={{headerShown: false}}
       />
        <Stack.Screen 
      name="NewUserChatScreen" 
      component={NewUserChatScreen} 
      options={{headerShown: false}}
       />
         <Stack.Screen 
      name="Notifications" 
      component={Notifications} 
      options={{headerShown: false}}
       />
        <Stack.Screen 
      name="MainScreenNewUser" 
      component={MainScreenNewUser} 
      options={{headerShown: false}}
       />
       <Stack.Screen 
      name="WriteScreenBlank" 
      component={WriteScreenBlank} 
      options={{headerShown: false}}
       />
       <Stack.Screen 
      name="WriteScreen" 
      component={WriteScreen} 
      options={{headerShown: false}}
       />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}
