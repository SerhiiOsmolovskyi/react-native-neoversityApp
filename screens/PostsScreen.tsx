import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../styles/global';

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/images/ProfileImage.png')}
          resizeMode='cover'
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Natali Romanova</Text>
          <Text style={styles.profileEmail}>email@example.com</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 16,
  },
  profileInfo: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 13,
    fontWeight: 700,
    color: colors.black,

  },
    profileEmail: {
    fontSize: 11,
    color: 'rgba(33, 33, 33, 0.80)',
  },
});

export default PostsScreen;
