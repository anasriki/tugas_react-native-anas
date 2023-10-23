import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../image/logo.jpg')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    top: 100,
  },
  imageContainer: {
    width: 200,
    height: 200,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 100,
  },
});

export default ImageComponent;