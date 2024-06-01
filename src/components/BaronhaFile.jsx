// import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
// import React,{useState} from 'react'
// import PhotoEditor from '@baronha/react-native-photo-editor';

// const BaronhaFile = () => {

//   const[photo,setPhoto]=useState(null)

//   const remoteURL ='https://images.unsplash.com/photo-1634915728822-5ad85582837a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80';

// const openImage=async()=>{
 
//   console.log("hrello")
//   try {
//     const path = await PhotoEditor.open({
//       path: remoteURL,
//       // path: photo.path,
//       // stickers,
//     });
//     setPhoto({
//       ...photo,
//       path,
//     });
//     console.log('resultEdit', path);
//     setPhoto(path)
//   } catch (e) {
//     console.log('e', e);
//   }
// }


//   return (
//     <View style={styles.root}>
//       <Text style={{ color: "black", textAlign: "center" }}>BaronhaFile</Text>
//       <TouchableOpacity style={styles.btn} onPress={() => openImage()}>
//         <Text style={styles.btnText}>Open</Text>
//       </TouchableOpacity>
//     {
//       photo &&  <Image
//       source={{uri:photo}} style={{height:100,width:100}}
//       />
//     }
//     </View>
//   )
// }

// export default BaronhaFile

// const styles = StyleSheet.create({
//   root: {
//     alignContent: "center",
//     alignItems: "center"
//   },
// btn:{
//   backgroundColor: "#0A497B",
//    height: 50,
//    width: 150, 
//   borderColor: "#0A497B",
//    display: "flex", 
//    alignItems: "center",
//     justifyContent: "center", 
//     marginTop: 10,
//    borderRadius: 10 
// },
// btnText:{
//   color: "#fff" ,
//   fontSize:20
// }
// })







import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import PhotoEditor from '@baronha/react-native-photo-editor';

const BaronhaFile = () => {
  const [photo, setPhoto] = useState(null);

  const remoteURL = 'https://images.unsplash.com/photo-1634915728822-5ad85582837a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80';

  const openImage = async () => {
    try {
      const editedPath = await PhotoEditor.open({
        path: remoteURL,
         features: {
            crop: true,
          },
      });
      console.log('resultEdit', editedPath);
      setPhoto(editedPath);
    } catch (e) {
      console.log('Error', e);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={{ color: 'black', textAlign: 'center' }}>BaronhaFile</Text>
      <TouchableOpacity style={styles.btn} onPress={openImage}>
        <Text style={styles.btnText}>Open</Text>
      </TouchableOpacity>
      {photo && (
        <Image
          source={{ uri: photo }}
          style={{ height: 200, width: 200, marginTop: 20 }}
        />
      )}
    </View>
  );
};

export default BaronhaFile;

const styles = StyleSheet.create({
  root: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: '#0A497B',
    height: 50,
    width: 150,
    borderColor: '#0A497B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
});




// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import PhotoEditor from '@baronha/react-native-photo-editor';

// const BaronhaFile = () => {
//   const [photo, setPhoto] = useState(null);

//   const remoteURL = 'https://images.unsplash.com/photo-1634915728822-5ad85582837a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80';

//   const cropImage = async () => {
//     try {
//       const croppedImage = await ImageCropPicker.openCropper({
//         path: remoteURL,
//         width: 300,
//         height: 400,
//         cropping: true,
//       });
//       return croppedImage.path;
//     } catch (error) {
//       console.log('Error cropping image:', error);
//       return null;
//     }
//   };

//   const openImage = async () => {
//     try {
//       const croppedImagePath = await cropImage();
//       if (croppedImagePath) {
//         const editedPath = await PhotoEditor.open({
//           path: croppedImagePath,
//         });
//         console.log('resultEdit', editedPath);
//         setPhoto(editedPath);
//       }
//     } catch (e) {
//       console.log('Error', e);
//     }
//   };

//   return (
//     <View style={styles.root}>
//       <Text style={{ color: 'black', textAlign: 'center' }}>Image Editor</Text>
//       <TouchableOpacity style={styles.btn} onPress={openImage}>
//         <Text style={styles.btnText}>Open</Text>
//       </TouchableOpacity>
//       {photo && (
//         <Image
//           source={{ uri: photo }}
//           style={{ height: 200, width: 200, marginTop: 20 }}
//         />
//       )}
//     </View>
//   );
// };

// export default BaronhaFile;

// const styles = StyleSheet.create({
//   root: {
//     alignContent: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   btn: {
//     backgroundColor: '#0A497B',
//     height: 50,
//     width: 150,
//     borderColor: '#0A497B',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//     borderRadius: 10,
//   },
//   btnText: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });
