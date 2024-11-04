import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';




import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import LogOutButton from "../components/LogOutButton";
import BackButton from "../components/BackButton";
import Home from "../screens/Home"
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostScreen from "../screens/CreatePostsScreen";
import { colors } from "../styles/global";
import ToolBarButton from "../components/ToolBarButton";
import Button from "../components/Button";
import { AntDesign } from '@expo/vector-icons';
import AddButton from "../components/AddButton";
import ProfileButton from "../components/ProfileButton";



const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({navigation, route}: {navigation: any, route: any}) => {
    return (
        
  <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerRightContainerStyle: { paddingRight: 16 },
                headerLeftContainerStyle: { paddingLeft: 16 },
                tabBarLabel: " ",
                headerTitleStyle: {
                    fontSize: 17,
                    fontWeight: '500',
                    color: colors.black,
                },
                tabBarStyle: { // Стилізація нижньої панелі навігації
                    backgroundColor: colors.white, // Колір фону
                    height: '10%', // Висота панелі
                    // paddingBottom: 10, // Відступ знизу для кнопок
                    paddingTop: 8, // Відступ зверху
                    borderTopWidth: 1,
                    borderTopColor: colors.light_grey,
                },
       
            }}>
            {/* <Tab.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerRight: () => <LogOutButton onPress={() => console.log('Log Out')} />,
                    headerLeft: () => <BackButton onPress={() => console.log('Back')} />,
                    tabBarIcon: () => <Ionicons name="log-in" size={24} />, 
                }}
            />
            <Tab.Screen
                name="Sign Up"
                component={RegistrationScreen}
                 options={{
                    tabBarIcon: () => <MaterialCommunityIcons name="account" size={24} />, 
                }}
            /> */}
            <Tab.Screen

                name="PostScreen"
                component={Home}
                options={{
                    title: "Posts",
                    headerRight: () => <LogOutButton onPress={() => navigation.navigate('Login')} />,
                    tabBarIcon: () => <ToolBarButton onPress={() => navigation.navigate('PostScreen')} />,
                    // headerTitleStyle: {
                    //     color: 'purple',
                    // },
                }}
            />
                    <Tab.Screen
                    name="CreatePost"
                    component={CreatePostScreen}
                    options={{
                        title: "Create a post",
                        headerLeft: () => <BackButton onPress={() => navigation.navigate('PostScreen')} />,
                        tabBarStyle: { display: "none" }, // Приховати нижню навігацію
                        tabBarIcon: () => (
                        <AddButton
                            onPress={() => navigation.navigate('CreatePost')}
                            children={<AntDesign name="plus" size={24} color="#fff" />}
                        />
                        ),
                    }}
                    />
             <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: () => <ProfileButton onPress={() => navigation.navigate('Profile')} />,
                }}
            />
        </Tab.Navigator>

    )
}

export default BottomTabNavigator;