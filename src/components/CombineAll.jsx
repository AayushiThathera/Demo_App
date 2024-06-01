import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageResizer from 'react-native-image-resizer';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'; // Correct import statement

const CombineAll = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    try {
      const pickedImage = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      });
      setImage(pickedImage);
    } catch (error) {
      console.error(error);
    }
  };

  const resizeImage = async () => {
    if (image) {
      try {
        const resizedImage = await ImageResizer.createResizedImage(image.path, 300, 400, 'JPEG', 80);
        setImage(resizedImage);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const rotateImage = async () => {
    if (image) {
      try {
        const rotatedImage = await ImageResizer.createResizedImage(image.path, 300, 400, 'JPEG', 80, 90); // 90 degrees rotation
        setImage(rotatedImage);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Image" onPress={pickImage} />
      <Button title="Resize Image" onPress={resizeImage} />
      <Button title="Rotate Image" onPress={rotateImage} />
      {image && (
        <SketchCanvas
          style={styles.canvas}
          strokeColor={'red'}
          strokeWidth={7}
          localSourceImage={{
            filename: image.path,
            directory: '',
            mode: 'AspectFill'
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  canvas: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  }
});

export default CombineAll;
