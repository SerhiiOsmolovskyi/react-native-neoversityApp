import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch } from 'react-redux';
import { authStateChanged } from './utils/auth';







import BottomTabNavigator from './navigation/BottomTabNavigator';
import StackNavigator from './navigation/StackNavigator';
import store from './redux/store/store';

SplashScreen.preventAutoHideAsync(); //Don't hide splash screen untill fonts are downloaded

export default function App() {
   const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); //Hide splash screen when fonts are downloaded
    }
  }, [fontsLoaded]);

    if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
    }
  

  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />

        </PersistGate>
      </Provider> 
  );
}

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    authStateChanged(dispatch);
  }, [dispatch]);


 return (
<GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <BottomTabNavigator /> */}
        <StackNavigator/>
      </NavigationContainer>
        </GestureHandlerRootView>
  );
};