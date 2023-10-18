import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const HomeComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./path-to-your-image.jpg')}
          style={styles.image}
        />
      </View>
      <Text>Halaman Utama</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ke Halaman Portofolio"
          onPress={() => navigation.navigate('Portofolio')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100, // Untuk membuat gambar menjadi bulat
  },
  buttonContainer: {
    alignItems: 'center',
  },
});

export default HomeComponent;