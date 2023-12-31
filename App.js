import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./login";
import Registro from "./register";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
            <Stack.Screen name="Registro" options={{headerShown:false}} component={Registro} />
            
            </Stack.Navigator>
        </NavigationContainer>
    );
}