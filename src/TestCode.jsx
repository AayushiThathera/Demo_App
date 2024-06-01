// import React, { useEffect, useCallback } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import PhotoEditor from 'react-native-photo-editor';
// import { FileSystem } from 'react-native-file-access';

// const App = () => {
//   const photoPath = `${FileSystem.cacheDirectory}photo.jpg`;
//   const binaryFile = Image.resolveAssetSource(require('./assets/photo.jpg'));

//   const downloadImage = useCallback(async () => {
//     try {
//       const response = await fetch(binaryFile.uri);
//       const blob = await response.blob();
//       const base64Data = await blobToBase64(blob);

//       await FileSystem.writeFile(photoPath, base64Data, 'base64');
//       console.log('FILE WRITTEN!');
//     } catch (err) {
//       console.log(err.message);
//     }
//   }, [binaryFile.uri, photoPath]);

//   useEffect(() => {
//     downloadImage();
//   }, [downloadImage]);

//   const blobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result.split(',')[1]);
//       reader.onerror = reject;
//       reader.readAsDataURL(blob);
//     });
//   };

//   const onPress = () => {
//     PhotoEditor.Edit({
//       path: photoPath,
//       stickers: [
//         'sticker0',
//         'sticker1',
//         'sticker2',
//         'sticker3',
//         'sticker4',
//         'sticker5',
//         'sticker6',
//         'sticker7',
//         'sticker8',
//         'sticker9',
//         'sticker10',
//       ],
//       // hiddenControls: [
//       //   'clear',
//       //   'crop',
//       //   'draw',
//       //   'save',
//       //   'share',
//       //   'sticker',
//       //   'text',
//       // ],
//       colors: undefined,
//       onDone: () => {
//         console.log('on done');
//       },
//       onCancel: () => {
//         console.log('on cancel');
//       },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={onPress}>
//         <Text>Click</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });

// export default App;




// import React, { useState } from 'react';
// import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
// import PhotoEditor from 'react-native-photo-editor';
// import RNFS from 'react-native-fs';

// const PhotoEditorImage = () => {
//     const [editedImagePath, setEditedImagePath] = useState(null);

//     const downloadImage = async (url) => {
//         try {
//             const filePath = `${RNFS.DocumentDirectoryPath}/photo.jpg`;
//             await RNFS.downloadFile({ fromUrl: url, toFile: filePath }).promise;
//             return filePath;
//         } catch (error) {
//             console.error('Image download error:', error);
//             throw error;
//         }
//     };

//     const onHandleOpenEditor = async () => {
//         console.log('Opening the editor');
//         const photoUrl = 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400';

//         try {
//             const localImagePath = await downloadImage(photoUrl);
//             PhotoEditor.Edit({
//                 path: localImagePath,
//                 onDone: (editedImagePath) => {
//                     console.log('Editing done');
//                     setEditedImagePath(editedImagePath);
//                 },
//                 onCancel: () => {
//                     console.log('Editing cancelled');
//                 }
//             });
//         } catch (error) {
//             console.error('Error opening editor:', error);
//         }
//     };

//     return (
//         <View style={styles.root}>
//             <Text style={{ color: 'black', textAlign: 'center' }}>Image Editor</Text>
//             <TouchableOpacity style={styles.openEditorStyles} onPress={onHandleOpenEditor}>
//                 <Text style={styles.btnTxt}>Open</Text>
//             </TouchableOpacity>
//             {editedImagePath && (
//                 <Image
//                     source={{ uri: `file://${editedImagePath}` }}
//                     style={styles.editedImage}
//                 />
//             )}
//         </View>
//     );
// };

// export default PhotoEditorImage;

// const styles = StyleSheet.create({
//     root: {
//         display: 'flex',
//         alignContent: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flex: 1,
//         backgroundColor: '#fff',
//     },
//     openEditorStyles: {
//         backgroundColor: '#0A497B',
//         borderWidth: 1,
//         borderColor: 'lightblue',
//         height: 50,
//         width: 100,
//         borderRadius: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 60,
//     },
//     btnTxt: {
//         color: '#fff',
//         fontSize: 20,
//     },
//     editedImage: {
//         width: 200,
//         height: 200,
//         marginTop: 20,
//         borderColor: '#000',
//         borderWidth: 1,
//     },
// });



// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import ImagePicker from '@baronha/react-native-multiple-image-picker';
// import PhotoEditor from '@baronha/react-native-photo-editor';

// const { width } = Dimensions.get('window');

// const App = () => {
//   const [photo, setPhoto] = useState({});
//   const remoteURL =
//     'https://images.unsplash.com/photo-1634915728822-5ad85582837a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80';

//   const openPicker = () => {
//     ImagePicker.openPicker({ singleSelectedMode: true })
//       .then((result) => {
//         console.log('result', result);
//         setPhoto(result[0]);
//       })
//       .then((e) => {
//         // console.log('error');
//       });
//   };

//   const onEdit = async () => {
//     try {
//       const path = await PhotoEditor.open({
//         path: remoteURL,
//         // path: photo.path,
//         stickers,
//       });
//       setPhoto({
//         ...photo,
//         path,
//       });
//       console.log('resultEdit', path);
//     } catch (e) {
//       console.log('e', e);
//     }
//   };

//   return (
//     <SafeAreaView style={style.container}>
//       <TouchableOpacity onPress={onEdit}>
//         {photo?.path && (
//           <Image
//             style={style.image}
//             source={{
//               uri: photo.path,
//             }}
//           />
//         )}
//         <Image
//           style={style.image}
//           source={{
//             uri: remoteURL,
//           }}
//         />
//       </TouchableOpacity>
//       {/* <TouchableOpacity style={style.openPicker} onPress={openPicker}>
//         <Text style={style.titleOpen}>Open Picker</Text>
//       </TouchableOpacity> */}
//     </SafeAreaView>
//   );
// };

// export default App;

// const style = StyleSheet.create({
//   container: {},
//   image: {
//     width,
//     height: width,
//   },
//   openPicker: {
//     margin: 12,
//     backgroundColor: '#000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   titleOpen: {
//     color: '#fff',
//     fontWeight: 'bold',
//     padding: 12,
//   },
// });

// const stickers = [];











// import React, { useState } from 'react';
// import { View, Button, Image } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import { rotateImage } from 'react-native-image-rotate';
// import { Svg, Circle, Rect, Text } from 'react-native-svg';

// const App = () => {
//   const [image, setImage] = useState(null);

//   const selectImage = () => {
//     ImagePicker.openPicker({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       setImage(image.path);
//     });
//   };

//   const rotate = () => {
//     if (image) {
//       rotateImage(image, 90).then(rotatedUri => {
//         setImage(rotatedUri);
//       });
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Button title="Select Image" onPress={selectImage} />
//       {image && (
//         <>
//           <Image source={{ uri: image }} style={{ width: 300, height: 400 }} />
//           <Button title="Rotate Image" onPress={rotate} />
//           <Svg height="100" width="100">
//             <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
//             <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
//             <Text x="50" y="50" fontSize="20" fontWeight="bold" textAnchor="middle" fill="black">
//               Hello
//             </Text>
//           </Svg>
//         </>
//       )}
//     </View>
//   );
// };

// export default App;






import React, { useState } from "react";
import { View, Button, Image } from "react-native";
// import ImagePicker from "react-native-image-crop-picker";
import { launchImageLibrary } from "react-native-image-picker";
const RotateImageExample = () => {
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
  );
};
export default RotateImageExample;





import {useEffect} from "react";
import {Canvas, useCanvasRef, Circle} from "@shopify/react-native-skia";
export const Demo = () => {
  const ref = useCanvasRef();
  useEffect(() => {
    setTimeout(() => {
      // you can pass an optional rectangle
      // to only save part of the image
      const image = ref.current?.makeImageSnapshot();
      if (image) {
        // you can use image in an <Image> component
        // Or save to file using encodeToBytes -> Uint8Array
        const bytes = image.encodeToBytes();
      }
    }, 1000)
  });
  return (
    <Canvas style={{ flex: 1 }} ref={ref}>
      <Circle r={128} cx={128} cy={128} color="red" />
    </Canvas>
  );
};