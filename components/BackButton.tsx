import { FC } from "react";
import { TouchableOpacity } from "react-native"


import ArrowLeftIcon from "../assets/icons/ArrowLeftIcon";

type Props = {
  onPress?: () => void;
}

const BackButton: FC<Props> = ({ onPress = () => {} }) => {


  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowLeftIcon  width={24} height={24} />
    </TouchableOpacity>
  );
};

export default BackButton;