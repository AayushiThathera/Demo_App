// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useState } from 'react'
// import PhotoEditor from 'react-native-photo-editor'
// import { FileSystem } from 'react-native-file-access'
// const PhotoEditorImage = () => {

//     const onHandleopenEditor = () => {
//         console.log("opening the editor")
//         const photoPath = "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400"
//         PhotoEditor.Edit({
//             path: photoPath
//         })
//     }

//     return (
//         <View style={styles.root}>
//             <Text style={{ color: "black", textAlign: "center" }}>Image Editor</Text>
//             <TouchableOpacity style={styles.openEditorStyles} onPress={() => onHandleopenEditor()}>
//                 <Text style={styles.btnTxt}>Open</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// export default PhotoEditorImage

// const styles = StyleSheet.create({
//     root: {
//         display: "flex",
//         alignContent: "center",
//         alignItems: "center",
//         justifyContent: "center"
//     },
//     openEditorStyles: {
//         backgroundColor: "#0A497B",
//         borderWidth: 1,
//         borderColor: "lightblue",
//         height: 50,
//         width: 100,
//         borderRadius: 10,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 60
//     },
//     btnTxt: {
//         color: "#fff",
//         fontSize: 20
//     }
// })

import React,{useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import PhotoEditor from 'react-native-photo-editor';
import RNFS from 'react-native-fs';

const PhotoEditorImage = () => {
   const[editedImagePath,setEditedImagePath]=useState(null)

    const downloadImage = async (url) => {
        try {
            const filePath = `${RNFS.DocumentDirectoryPath}/photo.jpg`;
            const response = await RNFS.downloadFile({ fromUrl: url, toFile: filePath }).promise;
            return filePath;
        } catch (error) {
            console.error('Image download error:', error);
            throw error;
        }
    };

    const onHandleOpenEditor = async () => {
        console.log('Opening the editor');
        const photoUrl = 'https://media.istockphoto.com/id/1317323736/de/foto/blick-in-die-b%C3%A4ume-richtung-himmel.jpg?s=612x612&w=0&k=20&c=grRL2wo8gWT2XYd3dU9Hfo0N9RPjUmYtGtQgi4ITHRY=';

        try {
            const localImagePath = await downloadImage(photoUrl);
            PhotoEditor.Edit({
                path: localImagePath,
                onDone: (editedImagePath) => {
                    console.log('Editing done',editedImagePath);
                    setEditedImagePath(editedImagePath);
                },
                onCancel: () => {
                    console.log('Editing cancelled');
                }
            });
        } catch (error) {
            console.error('Error opening editor:', error);
        }
    };

    return (
        <View style={styles.root}>
            <Text style={{ color: 'black', textAlign: 'center' }}>Image Editor</Text>
            <TouchableOpacity style={styles.openEditorStyles} onPress={onHandleOpenEditor}>
                <Text style={styles.btnTxt}>Open</Text>
            </TouchableOpacity>
            {editedImagePath && (
                <Image
                    source={{ uri: `file://${editedImagePath}` }}
                    style={styles.editedImage}
                />
            )}
        </View>
    );
};

export default PhotoEditorImage;

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    openEditorStyles: {
        backgroundColor: '#0A497B',
        borderWidth: 1,
        borderColor: 'lightblue',
        height: 50,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
    },
    editedImage: {
        width: 200,
        height: 200,
        marginTop: 20,
        
    },
});
