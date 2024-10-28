import { FC } from "react";
import { TouchableOpacity } from "react-native";
import LogOutIcon from "../assets/icons/LogOutIcon";

type Props = {
  onPress: () => void;
}

const LogOutButton: FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LogOutIcon width={24} height={24} />
    </TouchableOpacity>
  );
};

export default LogOutButton;