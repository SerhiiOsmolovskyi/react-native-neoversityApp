import { createStackNavigator } from "@react-navigation/stack"



import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";


const Stack = createStackNavigator();



const StackNavigator = () => {
      const user = useSelector((state: RootState) => state.user.userInfo);

    return (
        <Stack.Navigator
            initialRouteName="Login"
             screenOptions={{
        headerShown: false,
      }}
        >
            {user ?(<Stack.Screen 
                name="Home" 
                component={BottomTabNavigator} 
                options={{ headerShown: false }}
            />) : (
                    <>
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
                    </>
            ) }
            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{ title: "Map" }}
            />
            <Stack.Screen
                name="Camera"
                component={CameraScreen}
                options={{ title: "Camera" }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
