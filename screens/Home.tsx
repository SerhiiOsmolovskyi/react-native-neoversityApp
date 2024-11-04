import { View, StyleSheet } from 'react-native';
import PostsScreen from './PostsScreen';

const Home = () => {
    return (
        <View style={styles.container}>
           <PostsScreen/>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Додаємо flex: 1, щоб зайняти весь доступний простір екрану
  },
});

export default Home;
