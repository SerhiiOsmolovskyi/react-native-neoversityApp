import { FC } from "react";
import { TouchableOpacity } from "react-native"
import ProfileIcon from "../assets/icons/ProfileIcon";



type Props = {
  onPress?: () => void;
}

const ProfileButton: FC<Props> = ({ onPress = () => {} }) => {


  return (
    <TouchableOpacity onPress={onPress}>
      <ProfileIcon  width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ProfileButton;