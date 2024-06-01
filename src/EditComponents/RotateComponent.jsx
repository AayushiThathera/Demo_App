import { StyleSheet, Text, View, Image,Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from "react-native-image-picker";

const RotateComponent = () => {
    const [imageUri, setImageUri] = useState(null);
  const [rotation, setRotation] = useState(0);


     const pickImage = async () => {
    const fileSelected = await launchImageLibrary({
      mediaType: "photo",
      includeBase64: true,
      selectionLimit: 1,
    });
    console.log(fileSelected);
    setImageUri(fileSelected.assets[0].uri);
    setRotation(0);
    // ImagePicker.openPicker({
    //   width: 300,
    //   height: 300,
    //   cropping: true,
    // }).then((image) => {
    //   setImageUri(image.path);
    //   setRotation(0); // Reset rotation when a new image is picked
    // });
  };
  const rotateImage = () => {
    if (imageUri) {
      const newRotation = (rotation + 90) % 360;
      setRotation(newRotation);
    }
  };

    return (
        <>
           <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: 300,
            height: 300,
            transform: [{ rotate: `${rotation}deg` }],
          }}
        />
      )}
      <Button title="Pick Image" onPress={pickImage} />
      {imageUri && <Button title="Rotate Image" onPress={rotateImage} />}
    </View>
        </>
    );
}

export default RotateComponent;

const styles = StyleSheet.create({
    root: {
        alignContent: "center",
        alignItems: "center"
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginTop: 20
    },
    button: {
        height: 50,
        width: 100,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0A497B",
        borderColor: "#0A497B",
        marginTop: 20
    },
    text: {
        color: "#fff"
    }
});


