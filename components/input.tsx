import { StyleSheet, TextInput, View, ViewProps, TouchableOpacity, Text } from "react-native";
import { colors } from "../styles/global";
import { FC, useState } from 'react';

type InputProps = {
    value: string, 
    placeholder?: string,
    outerStyles?: ViewProps['style'],
    onTextChange: (value: string) => void,
    secureTextEntry?: boolean;
    autofocus: boolean;
    rightButton?: React.ReactNode; // Зберігаємо параметр rightButton для інших випадків використання
}

const Input: FC<InputProps> = ({
    value,
    onTextChange,
    placeholder,
    outerStyles,
    secureTextEntry = false,
    autofocus = false,
    rightButton, // Додаємо параметр для інших кнопок праворуч
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(secureTextEntry);

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setIsFocused(false);
    const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

    return (
        <View style={[styles.input, isFocused && styles.focused, outerStyles]}>
            <TextInput
                value={value}
                onChangeText={onTextChange}
                style={[ styles.baseText, styles.textInput]}
                placeholder={placeholder}
                secureTextEntry={isPasswordVisible}
                autoFocus={autofocus}
                autoCapitalize="none"
                onFocus={onFocus}
                onBlur={onBlur}
            />
            {/* Кнопка "Show/Hide" для пароля */}
            {secureTextEntry && (
                <TouchableOpacity onPress={togglePasswordVisibility}>
                    <Text style={styles.baseText}>
                        {isPasswordVisible ? 'Show password' : 'Hide password'}
                    </Text>
                </TouchableOpacity>
            )}
            {/* Додатковий елемент праворуч, якщо переданий */}
            {rightButton}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 15,
        height: 50,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.dark_grey,
        backgroundColor: colors.light_grey,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        flex: 1,
        color: colors.black,
    },
    baseText: {
        fontWeight: '400',
        fontSize: 16, 
        lineHeight: 18, 
        color: colors.blue,
    },
    focused: {
        backgroundColor: colors.white,
        borderColor: colors.orange,
    },

});

export default Input;
