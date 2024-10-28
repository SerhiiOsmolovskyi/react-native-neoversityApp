import { Alert, StyleSheet, View, Image, Text, Dimensions,  TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { colors } from '../styles/global';
import Input from '../components/input';

import {FC, useState, useEffect } from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { StackParamList } from "../navigation/StackNavigator";


import Button from '../components/Button';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');



type HomeScreenProps = NativeStackScreenProps<StackParamList, 'Login'>;


const LoginScreen: FC<HomeScreenProps> = ({ navigation, route }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);




  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };
        
    const showPassword = () => {
        setIsPasswordVisible(prev => !prev)
    };

        const onLogin = () => {
            console.log('Welcome');
        
    };
    
  const onSignUp = () => {
    navigation.navigate('RegistrationScreen', { userEmail: email })
  };

    const showButton = (
        < TouchableOpacity
        onPress={showPassword}>
            <Text style={[styles.showButton, styles.baseText]}>
                Show password
            </Text>
        </TouchableOpacity>
 
    )

    return (
        <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}>
            <View style={styles.wrapper}>
              <Image
                source={require('../assets/images/PhotoBG.png')}
                resizeMode='cover'
                style={styles.image}
            />
                <KeyboardAvoidingView
                 style={styles.container}
                 behavior={Platform.OS == "ios" ? 'height' : 'padding'}>
            <View
              style={styles.formContainer}>
                <Text style={styles.title}>Sign In</Text>
                <View
                    style={[styles.innerContainer, styles.inputContainer]}>
                    <Input
                        value={email}
                        placeholder='Email address'
                        onTextChange={handleEmailChange}
                        autofocus={true}
                    />
                    <Input
                        value={password}
                        placeholder='Password'
                        // rightButton={showButton}
                        outerStyles={styles.passwordButton}
                        onTextChange={handlePasswordChange}
                        secureTextEntry={isPasswordVisible}
                        autofocus={false}
                    />
                </View>
                        <View style={[styles.innerContainer, styles.bottomContainer]}>
                            <Button onPress={onLogin}>
                                <Text style={[styles.baseText, styles.loginButtonText]} >
                                    Login
                                </Text>
                            </Button>
                            <View style={styles.signUpContainer}>
                                <Text style={[styles.showButton, styles.baseText]}>
                                    Don't have an account?
                                </Text>
                                <TouchableOpacity onPress={onSignUp}>
                                    <Text style={[styles.showButton, styles.baseText, styles.signUpText]}>
                                        Sign up
                                    </Text>
                                </TouchableOpacity>
                            </View>

                </View>

              </View>
            </KeyboardAvoidingView>
        </View>
    </TouchableWithoutFeedback>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    wrapper: {
        flex: 1,
    },
    innerContainer: {
        gap: 16, 
        justifyContent: 'center',
    }, 

    inputContainer: {
        marginTop: 32, 
    },
    bottomContainer: {
        marginTop: 42, 
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',// Розміри зображення
    }, 

    formContainer: {
        position: 'absolute',
        width: SCREEN_WIDTH, 
        height: '55%',
        bottom:0,
        backgroundColor: colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 16,
        paddingTop: 32,
    },
    title: {
        fontSize: 30,
        fontWeight: '500', 
        color: colors.black,
        lineHeight: 36,
        textAlign: 'center',

    }, 
    baseText: {
        fontWeight: '400',
        fontSize: 16, 
        lineHeight: 18, 
        color: colors.blue,
    },
    showButton: {
        color: colors.blue,
    },
    passwordButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginButtonText: { 
        textAlign: 'center', 
        color: colors.white,
    }, 
    signUpContainer: {
        width: 252, 
        justifyContent: 'space-between',
        flexDirection: "row",
        alignSelf: 'center',
    
    },
    signUpText: {
        textDecorationLine: 'underline',
    }

});