import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CreatePostScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post Screen</Text>
      <Button
        title="Create"
        onPress={() => {
          // Тут можна реалізувати функцію для створення поста
          navigation.navigate('Home');
        }}
      />
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
    marginBottom: 20,
    fontWeight: 'bold',
  },
});

export default CreatePostScreen;
