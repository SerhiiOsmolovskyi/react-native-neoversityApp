import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { colors } from '../styles/global';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button as RNButton } from 'react-native';

import Button from '../components/Button';
import PhotoIcon from '../assets/icons/PhotoIcon';
import LocationIcon from '../assets/icons/LocationIcon';
import DeleteButton from '../components/DeleteButton';

const CreatePostScreen = ({navigation, route}: {navigation: any, route: any}) => {
  // const navigation = useNavigation();
  const [image, setImage] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePublish = () => {
    console.log('Публікація:', { title, location, image });
  };

  const handleDelete = () => {
    setImage(null);
    setTitle('');
    setLocation('');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container} >
      {/* <TouchableOpacity style={styles.imageContainer} onPress={pickImage}> */}
      <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('Camera')}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <PhotoIcon width={24} height={24} />
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.imageText}>Download a picture</Text>

      <TextInput
        style={styles.input}
        placeholder="Name..."
        value={title}
        onChangeText={setTitle}
      />

      <View style={styles.locationContainer}>
        <LocationIcon width={24} height={24} />
        <TextInput
          style={styles.locationInput}
          placeholder="Location..."
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <Button
        buttonStyle={{
          ...styles.publishButton,
          ...(image ? styles.publishButtonActive : styles.publishButtonDisabled),
        }}
        onPress={handlePublish}
      >
        <Text style={image ? styles.publishButtonActiveText : styles.publishButtonDisabledText}>
          Publish
        </Text>
        </Button>
         <RNButton
        title="Open Map"
        onPress={() => navigation.navigate('Map')} // Перехід на екран карти
        color={colors.orange}
      />
      
      </View>
     
      <View style={styles.deleteButton}>
         <DeleteButton 
        onPress={handleDelete}
        children={<AntDesign name="delete" size={24} color={colors.icon_grey} />}
        />

      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
    flex: 1,
    padding: 16,
    backgroundColor: colors.white,
    flexDirection: 'column',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    gap: 32,

  },

  imageContainer: {
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.dark_grey,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light_grey,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  imagePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  imageText: {
    marginTop: 8,
    color: colors.icon_grey,
    fontWeight: '400',
    fontSize: 16,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 16,
    fontSize: 16,
    height: 50,
  },

  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  locationInput: {
    flex: 1,
    paddingVertical: 16,
    fontSize: 16,
  },

  publishButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: 'center',
  },
  publishButtonActive: {
    backgroundColor: colors.orange,
  },
  publishButtonDisabled: {
    backgroundColor: colors.dark_grey,
  },
  publishButtonText: {
    fontSize: 16,
  },
  publishButtonDisabledText: {
    color: colors.icon_grey,
  },
  publishButtonActiveText: {
    color: colors.white,
  },
  
  deleteButton: {
    alignSelf: 'center',
    bottom: 34, // Відступ від нижнього краю
  },
});

export default CreatePostScreen;
