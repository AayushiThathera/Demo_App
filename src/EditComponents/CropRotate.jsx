// import React from 'react';
// import AmazingCropper from 'react-native-amazing-cropper';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Platform,
//   TouchableOpacity,
 
// } from 'react-native';
// import { windowWidth, windowheight } from '../constants';
// const CropRotate = () => {
 
//   const onDone = (croppedImageUri, garbageUris) => {
//     console.log('croppedImageUri = ')
//     // console.log('croppedImageUri = ', croppedImageUri);
//     // clear the garbage uris from cache
//     // send image to server for example
//   };

//   const onError = (err) => {
//     console.log(err);
//   };

//   const onCancel = () => {
//     console.log('Cancel button was pressed');
//     // navigate back
//   };

//   return (
//   <>
//    <View style={styles.container}>
//       <View style={styles.cropContainer}>
//         <AmazingCropper
//           // onDone={onDone}
//           // onError={onError}
//           // onCancel={onCancel}
//           footerComponent={<DefaultFooter doneText='OK' rotateText='ROT' cancelText='BACK' />}
//           onDone={this.onDone}
//           onError={this.onError}
//           onCancel={this.onCancel}
//           imageUri='https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA'
//           imageWidth={100}
//           imageHeight={100}
//           NOT_SELECTED_AREA_OPACITY={0.3}
//           BORDER_WIDTH={20}
//           TOP_VALUE={5}
//           // footerComponent={<DefaultFooter />}
//         />
//       </View>
//     </View>
//     {/* <Text style={styles.IconText}>Text</Text> */}
//     </>
//   );
// };

// export default CropRotate;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white', // or any background color you prefer
//   },
//   cropContainer: {
//     width: '90%', // Adjust width as needed
//     height: '90%',
//     marginRight:400
//   },  
// })





// // export type DefaultFooterProps = {
// //   onDone?: () => any;
// //   onRotate?: () => any;
// //   onCancel?: () => any;
// //   doneText: string;
// //   rotateText: string;
// //   cancelText: string;
// // };
// const DefaultFooter = props => (
//   // <View style={styless.buttonsContainer}>
//   //   <TouchableOpacity onPress={props.onCancel} style={styless.touchable}>
//   //     <Text style={styless.text}>{"cancelText"}</Text>
//   //   </TouchableOpacity>
//   //   <TouchableOpacity onPress={props.onRotate} style={styless.touchable}>
//   //     <Text style={styless.text}>{'rotateText'}</Text>
//   //   </TouchableOpacity>
//   //   <TouchableOpacity onPress={props.onDone} style={styless.touchable}>
//   //     <Text style={styless.text}>{'doneText'}</Text>
//   //   </TouchableOpacity>
//   // </View>
//   <View  style={styless.buttonsContainer}>
//     <TouchableOpacity onPress={props.onCancel}>
//       <Text style={styless.text}>Cancel</Text>
//     </TouchableOpacity>
//     <TouchableOpacity  onPress={props.onRotate}>
//       <Text style={styless.text}>Rotate</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={props.onDone}>
//       <Text style={styless.text}>Done</Text>
//     </TouchableOpacity>
//   </View>
// );

// const styless = StyleSheet.create({
//   buttonsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     // height: -150,
//     // height: -50,
//     // width:200,
//     // backgroundColor:"white",
//     marginLeft:300,
// // paddingBottom:-10
//   },
//   text: {
//     color: 'black',
//     fontSize: 16,
//     marginRight:30,
   
//   },
//   touchable: {
//     padding: 10,
//   },
// });



import React, { useState } from 'react';
import AmazingCropper from 'react-native-amazing-cropper';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';


const CropRotate = () => {
  const [croppedImageUri, setCroppedImageUri] = useState(null);

  const onDone = (croppedImageUri, garbageUris) => {
    console.log("on done called");
    // console.log('croppedImageUri = ', croppedImageUri);
    // setCroppedImageUri(croppedImageUri);

  };

  const onError = (err) => {
    console.log(err);
  };

  const onCancel = () => {
    console.log('Cancel button was pressed');
  };
  let img = "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA"
    return (
    <View style={styles.container}>
      {croppedImageUri ? (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Cropped Image:</Text>
          <Image
            source={{ uri: croppedImageUri }}
            style={styles.croppedImage}
          />
        </View>
      ) : (
        <View style={styles.cropContainer}>
          <AmazingCropper
            onDone={onDone}
            onError={onError}
            onCancel={onCancel}
            imageUri='https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA'
            imageWidth={536}
            imageHeight={354}
            NOT_SELECTED_AREA_OPACITY={0.3}
            BORDER_WIDTH={20}
            TOP_VALUE={5}
            footerComponent={<DefaultFooter />}
          />
        </View>
      )}
    </View>
  );
};

const DefaultFooter = (props) => (
  <View style={footerStyles.buttonsContainer}>
    <TouchableOpacity onPress={props.onCancel}>
      <Text style={footerStyles.text}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onRotate}>
      <Text style={footerStyles.text}>Rotate</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onDone}>
      <Text style={footerStyles.text}>Done</Text>
    </TouchableOpacity>
  </View>
);

export default CropRotate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // or any background color you prefer
  },
  cropContainer: {
    width: '90%', // Adjust width as needed
    height: '90%',
    marginRight:400
  },
});

const footerStyles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft:300,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginRight:30,
   
  },
  touchable: {
    padding: 10,
  },
});
