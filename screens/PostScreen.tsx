import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const PostScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { post } = route.params; // Отримуємо пост через параметри навігації

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.content}>{post.content}</Text>
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default PostScreen;
