import { createStackNavigator } from "@react-navigation/stack"
import { NativeStackScreenProps } from '@react-navigation/native-stack';



import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import PostScreen from "../screens/PostScreen";


export type StackParamList = {
    Login: undefined; // або { userEmail: string } якщо ви передаєте значення
    RegistrationScreen: { userEmail: string }; // як приклад для реєстрації
};
const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ presentation: "transparentModal" }}
            />
            <Stack.Screen
                name="RegistrationScreen"
                component={RegistrationScreen}
                options={{ presentation: "transparentModal" }}
            />
            <Stack.Screen 
                name="Main" 
                component={BottomTabNavigator} 
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;
