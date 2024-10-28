import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';






import BottomTabNavigator from './navigation/BottomTabNavigator';
import StackNavigator from './navigation/StackNavigator';

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
<GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <BottomTabNavigator /> */}
        <StackNavigator/>

      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


