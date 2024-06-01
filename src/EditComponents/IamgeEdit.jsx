// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator
// } from 'react-native';
// import { CropIcon, ShapeIcon, TextIcon, RotateIcon, ResizeIcon } from '../../assets/icons/icon';
// import ImagePicker from 'react-native-image-crop-picker';
// import RNFS from 'react-native-fs';

// const ImageEdit = () => {
//   const [rotation, setRotation] = useState(0);
//   const [imageUri, setImageUri] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const editImageUri = 'https://images.unsplash.com/photo-1500828131278-8de6878641b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D';

//   useEffect(() => {
//     const downloadImage = async () => {
//       try {
//         const localPath = `${RNFS.DocumentDirectoryPath}/editImage.jpg`;
//         const downloadResult = await RNFS.downloadFile({
//           fromUrl: editImageUri,
//           toFile: localPath,
//         }).promise;

//         if (downloadResult.statusCode === 200) {
//           setImageUri(`file://${localPath}`);
//         } else {
//           console.error('Failed to download image');
//         }
//       } catch (error) {
//         console.error('Error downloading image:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     downloadImage();
//   }, []);

//   const onHandleRotate = () => {
//     const newRotation = (rotation + 90) % 360;
//     setRotation(newRotation);
//   };

//   const onHandleCrop = () => {
//     if (!imageUri) return;

//     ImagePicker.openCropper({
//       path: imageUri,
//       width: 100,
//       height: 100,
//     }).then((croppedImage) => {
//       setImageUri(croppedImage.path);
//     }).catch((error) => {
//       console.error('Error cropping image:', error);
//     });
//   };

//   return (
//     <View style={styles.root}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <>
//           <View style={styles.ImageContainer}>
//             <Image source={{ uri: imageUri }} style={[styles.images, { transform: [{ rotate: `${rotation}deg` }] }]} />
//           </View>

//           <View style={styles.IconContainer}>
//             <TouchableOpacity style={styles.IconWrapper} onPress={()=>onHandleCrop()}>
//               <CropIcon />
//               <Text style={styles.IconText}>Crop</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper} onPress={()=>onHandleRotate()}>
//               <RotateIcon />
//               <Text style={styles.IconText}>Rotate</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ResizeIcon />
//               <Text style={styles.IconText}>Re-Size</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <TextIcon />
//               <Text style={styles.IconText}>Text</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ShapeIcon />
//               <Text style={styles.IconText}>Shapes</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default ImageEdit;

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   ImageContainer: {
//     width: 324,
//     height: 249.7,
//     borderRadius: 8,
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   images: {
//     height: 225,
//     width: 300,
//     borderRadius: 4,
//   },
//   IconContainer: {
//     borderWidth: 1,
//     borderColor: '#ebf0f4',
//     borderRadius: 8,
//     backgroundColor: '#ebf0f4',
//     height: 66,
//     width: 296,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   IconWrapper: {
//     marginHorizontal: 10,
//     alignItems: 'center',
//   },
//   IconText: {
//     fontSize: 12,
//     fontFamily: 'Montserrat-SemiBold',
//     fontWeight: '600',
//     fontStyle: 'normal',
//     color: '#484C52',
//   },
// });



// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ActivityIndicator
// } from 'react-native';
// import { CropIcon, ShapeIcon, TextIcon, RotateIcon, ResizeIcon } from '../../assets/icons/icon';
// import RNFS from 'react-native-fs';
// import { CropView } from 'react-native-image-crop-tools';

// const ImageEdit = () => {
//   const [rotation, setRotation] = useState(0);
//   const [imageUri, setImageUri] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [cropping, setCropping] = useState(false);
//   const cropViewRef = useRef();

//   const editImageUri = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';

//   useEffect(() => {
//     const downloadImage = async () => {
//       try {
//         const localPath = `${RNFS.DocumentDirectoryPath}/editImage.jpg`;
//         const downloadResult = await RNFS.downloadFile({
//           fromUrl: editImageUri,
//           toFile: localPath,
//         }).promise;

//         if (downloadResult.statusCode === 200) {
//           console.log(`Image downloaded to ${localPath}`);
//           setImageUri(`file://${localPath}`);
//         } else {
//           console.error('Failed to download image, status code:', downloadResult.statusCode);
//         }
//       } catch (error) {
//         console.error('Error downloading image:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     downloadImage();
//   }, []);

//   const onHandleRotate = () => {
//     const newRotation = (rotation + 90) % 360;
//     setRotation(newRotation);
//   };

//   const onHandleCrop = () => {
//     setCropping(true);
//   };

//   const onHandleDone = () => {
//     if (cropViewRef.current) {
//       cropViewRef.current.saveImage(true, 90)
//         .then((res) => {
//           console.log('Cropped image path:', res.uri);
//           setImageUri(res.uri);
//           setCropping(false);
//         })
//         .catch((error) => {
//           console.error('Error cropping image:', error);
//           setCropping(false);
//         });
//     }
//   };

//   return (
//     <View style={styles.root}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <>
//           <View style={styles.ImageContainer}>
//             {cropping ? (
//               <CropView
//                 sourceUrl={imageUri}
//                 style={[styles.images, { transform: [{ rotate: `${rotation}deg` }] }]}
//                 ref={cropViewRef}
//                 keepAspectRatio
//                 aspectRatio={{ width: 100, height: 100 }}
//               />
//             ) : (
//               <Image
//                 source={{ uri: imageUri }}
//                 style={[styles.images, { transform: [{ rotate: `${rotation}deg` }] }]}
//               />
//             )}
//           </View>

//           <View style={styles.IconContainer}>
//             <TouchableOpacity style={styles.IconWrapper} onPress={onHandleCrop}>
//               <CropIcon />
//               <Text style={styles.IconText}>Crop</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper} onPress={onHandleRotate}>
//               <RotateIcon />
//               <Text style={styles.IconText}>Rotate</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ResizeIcon />
//               <Text style={styles.IconText}>Re-Size</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <TextIcon />
//               <Text style={styles.IconText}>Text</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ShapeIcon />
//               <Text style={styles.IconText}>Shapes</Text>
//             </TouchableOpacity>
//           </View>

//           {cropping && (
//             <TouchableOpacity style={styles.DoneButton} onPress={onHandleDone}>
//               <Text style={styles.DoneButtonText}>Done</Text>
//             </TouchableOpacity>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// export default ImageEdit;

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   ImageContainer: {
//     width: 324,
//     height: 249.7,
//     borderRadius: 8,
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   images: {
//     height: 225,
//     width: 300,
//     borderRadius: 4,
//   },
//   IconContainer: {
//     borderWidth: 1,
//     borderColor: '#ebf0f4',
//     borderRadius: 8,
//     backgroundColor: '#ebf0f4',
//     height: 66,
//     width: 296,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   IconWrapper: {
//     marginHorizontal: 10,
//     alignItems: 'center',
//   },
//   IconText: {
//     fontSize: 12,
//     fontFamily: 'Montserrat-SemiBold',
//     fontWeight: '600',
//     fontStyle: 'normal',
//     color: '#484C52',
//   },
//   DoneButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#0000ff',
//     borderRadius: 5,
//   },
//   DoneButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });




// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
//   Image
// } from 'react-native';
// import { CropIcon, ShapeIcon, TextIcon, RotateIcon, ResizeIcon } from '../../assets/icons/icon';
// import RNFS from 'react-native-fs';
// import { CropView } from 'react-native-image-crop-tools';

// const ImageEdit = () => {
//   const [rotation, setRotation] = useState(0);
//   const [imageUri, setImageUri] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [cropping, setCropping] = useState(false);
//   const cropViewRef = useRef();

//   const editImageUri = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';

//   useEffect(() => {
//     const downloadImage = async () => {
//       try {
//         const localPath = `${RNFS.DocumentDirectoryPath}/editImage.jpg`;
//         const downloadResult = await RNFS.downloadFile({
//           fromUrl: editImageUri,
//           toFile: localPath,
//         }).promise;

//         if (downloadResult.statusCode === 200) {
//           console.log(`Image downloaded to ${localPath}`);
//           setImageUri(`file://${localPath}`);
//         } else {
//           console.error('Failed to download image, status code:', downloadResult.statusCode);
//         }
//       } catch (error) {
//         console.error('Error downloading image:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     downloadImage();
//   }, []);

//   const onHandleRotate = () => {
//     const newRotation = (rotation + 90) % 360;
//     setRotation(newRotation);
//   };

//   const onHandleCrop = () => {
//     setCropping(true);
//   };

//   const onHandleDone = async () => {
//     if (cropViewRef.current) {
//       cropViewRef.current.saveImage(true, 90, async (error, result) => {
//         if (error) {
//           console.error('Error cropping image:', error);
//         } else {
//           const croppedImagePath = `file://${result.uri}`;
//           const fileExists = await RNFS.exists(croppedImagePath);
//           if (fileExists) {
//             console.log('Cropped image path:', croppedImagePath);
//             setImageUri(croppedImagePath);
//           } else {
//             console.error('Cropped image does not exist at path:', croppedImagePath);
//           }
//         }
//         setCropping(false);
//       });
//     }
//   };

//   return (
//     <View style={styles.root}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <>
//           <View style={styles.ImageContainer}>
//             {cropping ? (
//               <CropView
//                 sourceUrl={imageUri}
//                 style={styles.images}
//                 ref={cropViewRef}
//                 keepAspectRatio
//                 aspectRatio={{ width: 100, height: 100 }}
//                 onImageCrop={(result) => {
//                   console.log('Cropped image path:', result.uri);
//                   const croppedImagePath = `file://${result.uri}`;
//                   RNFS.exists(croppedImagePath).then((fileExists) => {
//                     if (fileExists) {
//                       setImageUri(croppedImagePath);
//                     } else {
//                       console.error('Cropped image does not exist at path:', croppedImagePath);
//                     }
//                   });
//                   setCropping(false);
//                 }}
//               />
//             ) : (
//               <View style={{ transform: [{ rotate: `${rotation}deg` }] }}>
//                 <Image source={{ uri: imageUri }} style={styles.images} />
//               </View>
//             )}
//           </View>

//           <View style={styles.IconContainer}>
//             <TouchableOpacity style={styles.IconWrapper} onPress={onHandleCrop}>
//               <CropIcon />
//               <Text style={styles.IconText}>Crop</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper} onPress={onHandleRotate}>
//               <RotateIcon />
//               <Text style={styles.IconText}>Rotate</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ResizeIcon />
//               <Text style={styles.IconText}>Re-Size</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <TextIcon />
//               <Text style={styles.IconText}>Text</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ShapeIcon />
//               <Text style={styles.IconText}>Shapes</Text>
//             </TouchableOpacity>
//           </View>

//           {cropping && (
//             <TouchableOpacity style={styles.DoneButton} onPress={onHandleDone}>
//               <Text style={styles.DoneButtonText}>Done</Text>
//             </TouchableOpacity>
//           )}
//         </>
//       )}
//     </View>
//   );
// };

// export default ImageEdit;

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   ImageContainer: {
//     width: 324,
//     height: 249.7,
//     borderRadius: 8,
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   images: {
//     height: 225,
//     width: 300,
//     borderRadius: 4,
//   },
//   IconContainer: {
//     borderWidth: 1,
//     borderColor: '#ebf0f4',
//     borderRadius: 8,
//     backgroundColor: '#ebf0f4',
//     height: 66,
//     width: 296,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   IconWrapper: {
//     marginHorizontal: 10,
//     alignItems: 'center',
//   },
//   IconText: {
//     fontSize: 12,
//     fontFamily: 'Montserrat-SemiBold',
//     fontWeight: '600',
//     fontStyle: 'normal',
//     color: '#484C52',
//   },
//   DoneButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#0000ff',
//     borderRadius: 5,
//   },
//   DoneButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });




// import React, { useState, useEffect, useRef } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
//   Image,
//   TextInput,
//   Modal,
// } from 'react-native';
// import { CropIcon, ShapeIcon, TextIcon, RotateIcon, ResizeIcon } from '../../assets/icons/icon';
// import RNFS from 'react-native-fs';
// import { CropView } from 'react-native-image-crop-tools';
// import RNPhotoManipulator from 'react-native-photo-manipulator';
// import Draggable from 'react-native-draggable';

// const ImageEdit = () => {
//   const [rotation, setRotation] = useState(0);
//   const [imageUri, setImageUri] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [cropping, setCropping] = useState(false);
//   const [textMode, setTextMode] = useState(false);
//   const [text, setText] = useState('');
//   const cropViewRef = useRef();

//   const editImageUri = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';

//   useEffect(() => {
//     const downloadImage = async () => {
//       try {
//         const localPath = `${RNFS.DocumentDirectoryPath}/editImage.jpg`;
//         const downloadResult = await RNFS.downloadFile({
//           fromUrl: editImageUri,
//           toFile: localPath,
//         }).promise;

//         if (downloadResult.statusCode === 200) {
//           console.log(`Image downloaded to ${localPath}`);
//           setImageUri(`file://${localPath}`);
//         } else {
//           console.error('Failed to download image, status code:', downloadResult.statusCode);
//         }
//       } catch (error) {
//         console.error('Error downloading image:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     downloadImage();
//   }, []);

//   const onHandleRotate = () => {
//     const newRotation = (rotation + 90) % 360;
//     setRotation(newRotation);
//   };

//   const onHandleCrop = () => {
//     setCropping(true);
//   };

//   const onHandleDone = async () => {
//     if (cropViewRef.current) {
//       cropViewRef.current.saveImage(true, 90, async (error, result) => {
//         if (error) {
//           console.error('Error cropping image:', error);
//         } else {
//           const croppedImagePath = `file://${result.uri}`;
//           const fileExists = await RNFS.exists(croppedImagePath);
//           if (fileExists) {
//             console.log('Cropped image path:', croppedImagePath);
//             setImageUri(croppedImagePath);
//           } else {
//             console.error('Cropped image does not exist at path:', croppedImagePath);
//           }
//         }
//         setCropping(false);
//       });
//     }
//   };

//   const onHandleText = () => {
//     setTextMode(true);
//   }; 

//   const onHandleTextDone = async () => {
//     if (text) {
//       const editedImage = await RNPhotoManipulator.printText(
//         imageUri,
//         [
//           {
//             position: { x: 150, y: 50 },
//             text: text,
//             textSize: 30,
//             color: '#000000',
//             thickness: 3,
//           },
//         ],
//         RNFS.DocumentDirectoryPath,
//       );

//       setImageUri(`file://${editedImage}`);
//       setTextMode(false);
//       setText('');
//     }
//   };

//   return (
//     <View style={styles.root}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <>
//           <View style={styles.ImageContainer}>
//             {cropping ? (
//               <CropView
//                 sourceUrl={imageUri}
//                 style={styles.images}
//                 ref={cropViewRef}
//                 keepAspectRatio
//                 aspectRatio={{ width: 100, height: 100 }}
//                 onImageCrop={(result) => {
//                   console.log('Cropped image path:', result.uri);
//                   const croppedImagePath = `file://${result.uri}`;
//                   RNFS.exists(croppedImagePath).then((fileExists) => {
//                     if (fileExists) {
//                       setImageUri(croppedImagePath);
//                     } else {
//                       console.error('Cropped image does not exist at path:', croppedImagePath);
//                     }
//                   });
//                   setCropping(false);
//                 }}
//               />
//             ) : (
//               <View style={{ transform: [{ rotate: `${rotation}deg` }] }}>
//                 <Image source={{ uri: imageUri }} style={styles.images} />
//               </View>
//             )}
//           </View>

//           <View style={styles.IconContainer}>
//             <TouchableOpacity style={styles.IconWrapper} onPress={onHandleCrop}>
//               <CropIcon />
//               <Text style={styles.IconText}>Crop</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper} onPress={onHandleRotate}>
//               <RotateIcon />
//               <Text style={styles.IconText}>Rotate</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ResizeIcon />
//               <Text style={styles.IconText}>Re-Size</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper} onPress={onHandleText}>
//               <TextIcon />
//               <Text style={styles.IconText}>Text</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.IconWrapper}>
//               <ShapeIcon />
//               <Text style={styles.IconText}>Shapes</Text>
//             </TouchableOpacity>
//           </View>

//           {cropping && (
//             <TouchableOpacity style={styles.DoneButton} onPress={onHandleDone}>
//               <Text style={styles.DoneButtonText}>Done</Text>
//             </TouchableOpacity>
//           )}

//           <Modal visible={textMode} transparent animationType="slide">
//             <View style={styles.modalContainer}>
//               <View style={styles.modalContent}>
//                 <TextInput
//                   style={styles.textInput}
//                   placeholder="Enter text"
//                   value={text}
//                   onChangeText={setText}
//                 />
//                 <View style={styles.modalButtons}>
                  
//                   <TouchableOpacity
//                     style={[styles.modalButton, styles.cancelButton]}
//                     onPress={() => setTextMode(false)}
//                   >
//                     <Text style={styles.modalButtonText}>Cancel</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity style={styles.modalButton} onPress={onHandleTextDone}>
//                     <Text style={styles.modalButtonText}>Done</Text>
//                   </TouchableOpacity>
//                 </View>
//               </View>
//             </View>
//           </Modal>
//         </>
//       )}
//     </View>
//   );
// };

// export default ImageEdit;

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   ImageContainer: {
//     width: 324,
//     height: 249.7,
//     borderRadius: 8,
//     marginTop: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   images: {
//     height: 225,
//     width: 300,
//     borderRadius: 4,
//   },
//   IconContainer: {
//     borderWidth: 1,
//     borderColor: '#ebf0f4',
//     borderRadius: 8,
//     backgroundColor: '#ebf0f4',
//     height: 66,
//     width: 296,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 30,
//   },
//   IconWrapper: {
//     marginHorizontal: 10,
//     alignItems: 'center',
//   },
//   IconText: {
//     fontSize: 12,
//     fontFamily: 'Montserrat-SemiBold',
//     fontWeight: '600',
//     fontStyle: 'normal',
//     color: '#484C52',
//   },
//   DoneButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#0000ff',
//     borderRadius: 5,
//   },
//   DoneButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     width: 300,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//   },
//   textInput: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   modalButton: {
//     padding: 10,
//     backgroundColor: '#0000ff',
//     borderRadius: 5,
//   },
//   modalButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
 
// })

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import { CropIcon, ShapeIcon, TextIcon, RotateIcon, ResizeIcon } from '../../assets/icons/icon';
import RNFS from 'react-native-fs';
import { CropView } from 'react-native-image-crop-tools';
import RNPhotoManipulator from 'react-native-photo-manipulator';
import Draggable from 'react-native-draggable';

const ImageEdit = () => {
  const [rotation, setRotation] = useState(0);
  const [imageUri, setImageUri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cropping, setCropping] = useState(false);
  const [textMode, setTextMode] = useState(false);
  const [text, setText] = useState('');
  const [textPosition, setTextPosition] = useState({ x: 150, y: 50 });
  const [draggableText, setDraggableText] = useState(null);
  const cropViewRef = useRef();

  const editImageUri = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';

  useEffect(() => {
    const downloadImage = async () => {
      try {
        const localPath = `${RNFS.DocumentDirectoryPath}/editImage.jpg`;
        const downloadResult = await RNFS.downloadFile({
          fromUrl: editImageUri,
          toFile: localPath,
        }).promise;

        if (downloadResult.statusCode === 200) {
          console.log(`Image downloaded to ${localPath}`);
          setImageUri(`file://${localPath}`);
        } else {
          console.error('Failed to download image, status code:', downloadResult.statusCode);
        }
      } catch (error) {
        console.error('Error downloading image:', error);
      } finally {
        setLoading(false);
      }
    };

    downloadImage();
  }, []);

  const onHandleRotate = () => {
    const newRotation = (rotation + 90) % 360;
    setRotation(newRotation);
  };

  const onHandleCrop = () => {
    setCropping(true);
  };

  const onHandleDone = async () => {
    if (cropViewRef.current) {
      cropViewRef.current.saveImage(true, 90, async (error, result) => {
        if (error) {
          console.error('Error cropping image:', error);
        } else {
          const croppedImagePath = `file://${result.uri}`;
          const fileExists = await RNFS.exists(croppedImagePath);
          if (fileExists) {
            console.log('Cropped image path:', croppedImagePath);
            setImageUri(croppedImagePath);
          } else {
            console.error('Cropped image does not exist at path:', croppedImagePath);
          }
        }
        setCropping(false);
      });
    }
  };

  const onHandleText = () => {
    setTextMode(true);
  };

  const onHandleTextDone = () => {
    if (text) {
      setDraggableText(text);
      setTextMode(false);
      setText('');
    }
  };

  return (
    <View style={styles.root}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <View style={styles.ImageContainer}>
            {cropping ? (
              <CropView
                sourceUrl={imageUri}
                style={styles.images}
                ref={cropViewRef}
                keepAspectRatio
                aspectRatio={{ width: 100, height: 100 }}
                onImageCrop={(result) => {
                  console.log('Cropped image path:', result.uri);
                  const croppedImagePath = `file://${result.uri}`;
                  RNFS.exists(croppedImagePath).then((fileExists) => {
                    if (fileExists) {
                      setImageUri(croppedImagePath);
                    } else {
                      console.error('Cropped image does not exist at path:', croppedImagePath);
                    }
                  });
                  setCropping(false);
                }}
              />
            ) : (
              <View style={{ transform: [{ rotate: `${rotation}deg` }] }}>
                  <Image source={{ uri: imageUri }} style={styles.images} />
                {draggableText && (

                  <>
                
                  <Draggable
                    x={textPosition.x}
                    y={textPosition.y}
                    onDragRelease={(event, gestureState, bounds) => {
                      setTextPosition({ x: bounds.left, y: bounds.top });
                    }}
                  > 
                    <Text style={styles.draggableText}>{draggableText}</Text>

                  </Draggable></>
                  
                )}
              </View>
            )}
          </View>

          <View style={styles.IconContainer}>
            <TouchableOpacity style={styles.IconWrapper} onPress={onHandleCrop}>
              <CropIcon />
              <Text style={styles.IconText}>Crop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconWrapper} onPress={onHandleRotate}>
              <RotateIcon />
              <Text style={styles.IconText}>Rotate</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconWrapper}>
              <ResizeIcon />
              <Text style={styles.IconText}>Re-Size</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconWrapper} onPress={onHandleText}>
              <TextIcon />
              <Text style={styles.IconText}>Text</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.IconWrapper}>
              <ShapeIcon />
              <Text style={styles.IconText}>Shapes</Text>
            </TouchableOpacity>
          </View>

          {cropping && (
            <TouchableOpacity style={styles.DoneButton} onPress={onHandleDone}>
              <Text style={styles.DoneButtonText}>Done</Text>
            </TouchableOpacity>
          )}

          <Modal visible={textMode} transparent animationType="slide">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter text"
                  value={text}
                  onChangeText={setText}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.cancelButton]}
                    onPress={() => setTextMode(false)}
                  >
                    <Text style={styles.modalButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.modalButton} onPress={onHandleTextDone}>
                    <Text style={styles.modalButtonText}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </>
      )}
    </View>
  );
};

export default ImageEdit;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  ImageContainer: {
    width: 324,
    height: 249.7,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  images: {
    height: 225,
    width: 300,
    borderRadius: 4,
  },
  IconContainer: {
    borderWidth: 1,
    borderColor: '#ebf0f4',
    borderRadius: 8,
    backgroundColor: '#ebf0f4',
    height: 66,
    width: 296,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  IconWrapper: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  IconText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
    fontStyle: 'normal',
    color: '#484C52',
  },
  DoneButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0000ff',
    borderRadius: 5,
  },
  DoneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    padding: 10,
    backgroundColor: '#0000ff',
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: 'gray',
  },
  draggableText: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 'bold',
  },
});
