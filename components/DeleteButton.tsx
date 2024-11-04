import { FC } from "react"
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native"

import { colors } from "../styles/global";
import { AntDesign } from '@expo/vector-icons';

type ButtonProps = {
  children: React.ReactNode,
  buttonStyle?: ViewStyle
  onPress: () => void;
}

const DeleteButton: FC<ButtonProps> = ({children, onPress, buttonStyle }) => {
  return (
    <TouchableOpacity
      style={[style.button, buttonStyle]}
      onPress={onPress}
    >
          {children}

    </TouchableOpacity>
  );
};

export default DeleteButton;

const style = StyleSheet.create({
    button: {
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: colors.light_grey,
    width: 70,
    height: 40,
  },
})