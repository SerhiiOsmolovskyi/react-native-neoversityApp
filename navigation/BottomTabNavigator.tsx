import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LogOutButton from "../components/LogOutButton";
import BackButton from "../components/BackButton";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        
        <Tab.Navigator
            initialRouteName="Sign Up"
            screenOptions={{
               headerRightContainerStyle:{paddingRight: 16},
                headerLeftContainerStyle: { paddingLeft: 16 },
                tabBarLabel: "",
}}>
            {/* <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerRight: () => <LogOutButton onPress={() => console.log('Log Out')} />,
                    headerLeft: () => <BackButton onPress={() => console.log('Back')} />,
                    tabBarIcon: () => <Ionicons name="log-in" size={24} />, 
                }}
            /> */}
            <Tab.Screen
                name="Sign Up"
                component={RegistrationScreen}
                 options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} />, 
                }}
            />
        </Tab.Navigator>

    )
}

export default BottomTabNavigator;