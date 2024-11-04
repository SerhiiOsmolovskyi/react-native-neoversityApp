import { FC } from "react";
import { TouchableOpacity } from "react-native"
import ToolBarIcon from "../assets/icons/ToolBarIcon";



type Props = {
  onPress?: () => void;
}

const ToolBarButton: FC<Props> = ({ onPress = () => {} }) => {


  return (
    <TouchableOpacity onPress={onPress}>
      <ToolBarIcon  width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ToolBarButton;