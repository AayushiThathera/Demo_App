// import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import ImagePicker from 'react-native-image-crop-picker';
// import ImageEditor from "@react-native-community/image-editor";

// const Edit = () => {
//     const [imageEdit, setImageEdit] = useState('');
//     const  [imageUri , setImageUri] = useState(null);

//     const editImage = 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400'
//     const openImage = () => {
//         ImagePicker.openPicker({
//             width: 300,
//             height: 400,
//             cropping: true, 
//             freeStyleCropEnabled:true
//         }).then(image => {
//             setImageEdit(image.path)
//         });
//     }

//     const cropImage = async (image) => {
//         const cropData = {
//           offset: { x: 0, y: 0 },
//           size: { width: 200, height: 200 },
//           displaySize: { width: 300, height: 400 },
//           resizeMode: 'contain',
//         };
//         try {
//           const data = await ImageEditor.cropImage(image, cropData);
//           console.log(data.uri);
//           setImageUri(data.uri);
//         } catch (error) {
//           console.error('Error cropping image:', error);
//         }
//       };

//     return (
//         <>
//             <View style={styles.root}>
//                 <Text style={{ color: "black", textAlign: "center" }}>Edit</Text>
//                 <Image
//                     source={{ uri: editImage }}
//                     style={styles.imageStyle}
//                 />
//                 {
//                     imageUri ?
//                     <Image
//                     source={{ uri: imageUri }}
//                     style={styles.imageStyle}
//                 />: <></>
//                 }

//                 <TouchableOpacity style={{ backgroundColor: "#0A497B", height: 50, width: 50, borderColor: "#0A497B", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10, borderRadius: 10 }} onPress={() => openImage()}>
//                     <Text style={{ color: "#fff" }}>Open</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity style={{ backgroundColor: "#0A497B", height: 50, width: 50, borderColor: "#0A497B", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10, borderRadius: 10 }} onPress={() => cropImage(editImage)}>
//                     <Text style={{ color: "#fff" }}>crop</Text>
//                 </TouchableOpacity>

//                 <View>
//                     {imageEdit && <Image
//                         source={{ uri: imageEdit }}
//                         style={styles.imageStyle}
//                     />}
//                 </View>
//             </View>
//         </>
//     );
// }

// export default Edit;

// const styles = StyleSheet.create({
//     root: {
//         alignContent: "center",
//         alignItems: "center"
//     },
//     imageStyle: {
//         width: 200,
//         height: 200,
//         marginTop: 20
//     },
//     button: {
//         height: 50,
//         width: 100,
//         borderColor: "black",
//         borderWidth: 1,
//         borderRadius: 10,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#0A497B",
//         borderColor: "#0A497B",
//         marginTop: 20
//     },
//     text: {
//         color: "#fff"
//     }
// });

// import React from 'react';
// import { Canvas, Text, Fill, useFont } from '@shopify/react-native-skia';
// import { StyleSheet, View } from 'react-native';


// const fontPath = require('../../assets/fonts/Montserrat-Black.ttf');

// export const HelloWorld = () => {
 
//   return (
//    <>
//     <View style={styles.container}>
//       <Canvas style={{ flex: 1 }}>
//         <Fill color="black" />
//         <Text
//           x={10}
//           y={10}
//           text="Hello World"
          
//         />
//       </Canvas>
//         {/* <Text style={{color:"black"}}>Hello</Text> */}
//     </View>

//    </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HelloWorld;

import React,{useEffect} from "react";
import { Canvas, Circle, Group,Paint, vec,useCanvasRef } from "@shopify/react-native-skia";
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
 
const App = () => {
  const width = 256;
const height = 256;
const strokeWidth = 10;
const c = vec(width / 2, height / 2);
const r = (width - strokeWidth) / 2;
const editImageUri = 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg';
  return (
    <Canvas style={{ width, height}}>
       {/* <Circle c={c} r={r} color="red">
        <Paint color="lightblue" />
        <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
        <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
      </Circle> */}
      {/* <Image source={{uri:editImageUri}} style={{height:100,width:100}}/> */}
      <Text>herllo</Text>
    </Canvas>
  );
};
 
export default App;



