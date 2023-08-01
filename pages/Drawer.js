// /* eslint-disable prettier/prettier */
// import 'react-native-gesture-handler';

// import * as React from 'react';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Home from './pages/Home';
// import Features from './pages/Features';
// import Notifications from './pages/Notifications';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const FirstScreenStack = () => {
//   return (
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{headerShown: false}}
//       >
//         <Stack.Screen
//           name="Home"
//           component={Home}
//         />
//       </Stack.Navigator>
//   );
// };

// const SecondScreenStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName="Features"
//       screenOptions={{headerShown: false}}
//     >
//       <Stack.Screen
//         name="Features"
//         component={Features}/>
//       <Stack.Screen
//         name="Notifications"
//         component={Notifications}/>
//     </Stack.Navigator>
//   );
// };

// function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         screenOptions={{
//           drawerStyle: {
//             backgroundColor: '#c6cbef', //Set Drawer background
//             width: 250, //Set Drawer width
//           },
//           headerStyle: {
//             backgroundColor: '#f4511e', //Set Header color
//           },
//           headerTintColor: '#fff', //Set Header text color
//           headerTitleStyle: {
//             fontWeight: 'bold', //Set Header text style
//           },
//         }}>
//         <Drawer.Screen
//           name="Home"
//           options={{
//             drawerLabel: 'First page Option',
//             title: 'First Stack',
//           }}
//           component={FirstScreenStack} />
//         <Drawer.Screen
//           name="Features"
//           options={{
//             drawerLabel: 'Second page Option',
//             title: 'Second Stack',
//           }}
//           component={SecondScreenStack} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
