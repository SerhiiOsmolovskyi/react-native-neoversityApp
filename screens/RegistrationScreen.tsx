import { StyleSheet, View, Image, Text, Dimensions,  TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { colors } from '../styles/global';
import Input from '../components/input';
import { useEffect, useState } from "react";
import Button from '../components/Button';
import { AntDesign } from '@expo/vector-icons';

import CrossIcon from '../assets/icons/CrossIcon';
import LogOutIcon from '../assets/icons/LogOutIcon';
import LogOutButton from '../components/LogOutButton';

const { width: SCREEN_WIDTH } = Dimensions.get('screen');



const RegistrationScreen = ({navigation, route}: {navigation: any, route: any}) => {
    const [login, setLogin] = useState<string>(''); 
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);



  const handleLoginChange = (value: string) => {
    setLogin(value);
  };
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
    navigation.navigate('Home')
        
        };
        const onSignUp = () => {
            navigation.navigate('Login')
        
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
                        <View style={styles.avatar}>
                <TouchableOpacity style={styles.addBtn}>
                                <AntDesign name="plus" size={24} color="#FF6C00" />
                                {/* <CrossIcon/> */}
                               
                </TouchableOpacity>
              </View>

                <Text style={styles.title}>Registration</Text>
                <View
                    style={[styles.innerContainer, styles.inputContainer]}>
                    <Input
                        value={login}
                        placeholder='Enter your login'
                        onTextChange={handleLoginChange}
                        autofocus={true}
                    />
                    <Input
                        value={email}
                        placeholder='Email address'
                        onTextChange={handleEmailChange}
                        autofocus={false}
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
                                    Sign Up
                                </Text>
                            </Button>
                            <View style={styles.signUpContainer}>
                                <Text style={[styles.showButton, styles.baseText]}>
                                    Alrady have an account?
                                </Text>
                                <TouchableOpacity onPress={onSignUp}>
                                    <Text style={[styles.showButton, styles.baseText, styles.signUpText]}>
                                        Login
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

export default RegistrationScreen;

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

     avatar: {
    position: 'absolute',
    borderRadius: 16,
    width: 120,
    height: 120,
    top: -60,
    backgroundColor: '#F6F6F6',
    alignSelf: 'center',
  },
    
  addBtn: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF6C00',
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
        height: '68%',
        bottom:0,
        backgroundColor: colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 16,
        paddingTop: 92,
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