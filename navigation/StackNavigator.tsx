import { createStackNavigator } from "@react-navigation/stack"



import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";


const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ presentation: "transparentModal" }}
            />
            <Stack.Screen
                name="SignUp"
                component={RegistrationScreen}
                options={{ presentation: "transparentModal" }}
            />
            <Stack.Screen 
                name="Home" 
                component={BottomTabNavigator} 
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
