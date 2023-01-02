import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../constants/styles';


import CarBranchScreen from '../pages/branch/CarBranchScreen';
import LoginScreen from '../pages/login/LoginScreen';
import SignUpScreen from '../pages/signup/SignUpScreen';
import WelcomeScreen from '../pages/welcome/WelcomeScreen';





const Stack = createNativeStackNavigator();



// const AuthStack = () => {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerStyle: { backgroundColor: Colors.primary500 },
//                 headerTintColor: 'white',
//                 contentStyle: { backgroundColor: Colors.primary100 },
//             }}
//         >
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Signup" component={SignUpScreen} />
//         </Stack.Navigator>
//     );
// }


// const AuthenticatedStack = () => {
//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 headerStyle: { backgroundColor: Colors.primary500 },
//                 headerTintColor: 'white',
//                 contentStyle: { backgroundColor: Colors.primary100 },
//             }}
//         >
//             <Stack.Screen name="Welcome" component={WelcomeScreen} />
//         </Stack.Navigator>
//     );
// }





const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerStyle: { backgroundColor: Colors.primary500 },
                    headerTitleStyle: { fontWeight: 'bold' },
                    headerTintColor: 'white',
                    contentStyle: { backgroundColor: Colors.primary100 },
                }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignUpScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="CarBranch" component={CarBranchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;


