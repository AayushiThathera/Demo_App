// import React, { useState, useEffect } from 'react';
// import { View, Image, Text,StyleSheet,TouchableOpacity } from 'react-native';
// import RNPhotoManipulator from 'react-native-photo-manipulator';

// const ManipulatePhone = () => {
//   const [croppedImage, setCroppedImage] = useState(null);
//   const imageUri = 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400';



//   useEffect(() => {
//   }, []);


// const onHandleSubmit=async()=>{
//     try {
//         const cropOptions = {
//           originX: 0, 
//           originY: 0, 
//           width: 200, 
//           height: 200, 
//         };
//         const croppedResult = await RNPhotoManipulator.crop(imageUri, cropOptions);
//         console.log('Cropped image:', croppedResult);
//         setCroppedImage(croppedResult); 
//       } catch (error) {
//         console.error('Error cropping image:', error);
//       }
// }

//   return (
//     <View style={styles.root}>
//             <Text style={{ color: "black", textAlign: "center" }}>Edit</Text>
//            <Image source={{uri:imageUri}} style={styles.image}/>
//             <TouchableOpacity style={styles.submitButton} onPress={()=>onHandleSubmit()}>
//                 <Text style={{color:"#fff"}}>Open</Text>
//             </TouchableOpacity>

//             <View>

//             </View>
//         </View>
//   );
// };

// export default ManipulatePhone;

// const styles = StyleSheet.create({
//     root:{
//         alignContent:"center",
//         alignItems:"center"
//     },
//     imageStyle: {
//         width: 200,
//         height: 200,
//         marginTop:20
//     },
//     button:{
//         height:50,
//         width:100,
//         borderColor:"black",
//         borderWidth:1,
//         borderRadius:10,
//         display:"flex",
//         alignItems:"center",
//         justifyContent:"center",
//         backgroundColor:"#0A497B",
//         borderColor:"#0A497B",
//        marginTop:20
//     },
//     text:{
//         color:"#fff"
//     },
//     submitButton:{
//         backgroundColor:"#0A497B",
//         height:50,
//         width:50,
//         borderColor:"#0A497B",
//         display:"flex",
//         alignItems:"center",
//         justifyContent:"center",
//         marginTop:10,
//         borderRadius:10
//     },
//     image:{
//         height:100,
//         width:100
//     }
// });


import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNPhotoManipulator, { FlipMode } from 'react-native-photo-manipulator';

const ManipulatePhone = () => {
    const [croppedImage, setCroppedImage] = useState(null);
    const imageUri = 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400'; // Use a local image

    const onHandleSubmit = async () => {


        //cropping the image 

        // const cropRegion = { x: 5, y: 30, height: 400, width: 250 };
        // const targetSize = { height: 200, width: 150 };

        // RNPhotoManipulator.crop(imageUri, cropRegion, targetSize).then(path => {
        //     console.log("my image ??? ///")
        //     setCroppedImage(path)
        //     console.log(`Result image path: ${path}`);
        // });
    

        //vertcal the image 

        // const mode = FlipMode.Vertical;

        // RNPhotoManipulator.flipImage(imageUri, mode).then(path => {
        //     console.log(`Result image path: ${path}`);
        //     setCroppedImage(path)
        // });

        const texts = [
            { position: { x: 150, y: 130 }, text: "Text 1", textSize: 20, color: "black",thickness: 3 },
            { position: { x: 100, y: 100 }, text: "Text 1", textSize: 30, color: "black", thickness: 3 }
        ];
        
        RNPhotoManipulator.printText(imageUri, texts).then(path => {
            console.log(`Result image path: ${path}`);
            setCroppedImage(path)
        });

    };

    return (
        <View style={styles.root}>
            <Text style={{ color: "black", textAlign: "center" }}>Image Manipulatort</Text>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity style={styles.submitButton} onPress={onHandleSubmit}>
                <Text style={{ color: "#fff" }}>Open</Text>
            </TouchableOpacity>
            {croppedImage && (
                <Image source={{ uri: croppedImage }} style={styles.imageStyle} />
            )}
        </View>
    );
};

export default ManipulatePhone;

const styles = StyleSheet.create({
    root: {
        alignContent: "center",
        alignItems: "center",
        padding: 20,
    },
    imageStyle: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
    submitButton: {
        backgroundColor: "#0A497B",
        height: 50,
        width: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        borderRadius: 10,
    },
    image: {
        height: 200,
        width: 200,
        marginTop: 20,
    },
});
