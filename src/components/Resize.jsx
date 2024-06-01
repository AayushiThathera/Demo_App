import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
    const [image, setImage] = useState(null);
    const imageUrl = "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400";

    const pickAndResizeImage = () => {
        ImagePicker.openPicker({
            width: 100,
            height: 100,
            cropping: true,
        }).then((image) => {
            setImage({ uri: image.path });
        }).catch((error) => {
            console.error("Error picking and resizing image: ", error);
        });
    };

    return (
        <View style={styles.container}>
            <Text style={{ color: "black", textAlign: "center" }}>Image Resize</Text>
            <Image
                source={image ? { uri: image.uri } : { uri: imageUrl }}
                style={styles.image}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={pickAndResizeImage}
            >
                <Text style={styles.buttonText}>Pick & Resize Image</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover', // You can change this to 'contain', 'stretch', etc.
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#0A497B',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
    },
});

export default App;
