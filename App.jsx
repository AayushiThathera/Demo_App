import { View, Text,StyleSheet } from 'react-native'
import { windowWidth,windowheight } from './src/constants'
import React from 'react'
import Edit from './src/EditComponents/Edit'
import Resize from './src/components/Resize'
import ManipulatePhone from './src/components/ManipulatePhone'
import PhotoEditorImage from './src/components/PhotoEditorImage'
import NativeMaker from './src/components/NativeMaker'
import BaronhaFile from './src/components/BaronhaFile'
import NativeCanvas from './src/components/NativeCanvas'
import ImageEdit from './src/EditComponents/IamgeEdit'
import RotateComponent from './src/EditComponents/RotateComponent'
import CropRotate from './src/EditComponents/CropRotate'
const App = () => {
  return (
    <View style={styles.root}>
      <ImageEdit/>
      {/* <Resize/> */}
      {/* <ManipulatePhone/> */}
      {/* <PhotoEditorImage/> */}
      {/* <NativeMaker/> */}
      {/* <BaronhaFile/> */}
      {/* <NativeCanvas/> */}

{/* <CropRotate/> */}
      {/* <Edit/>   */}
      {/* <RotateComponent/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent:"center",
    display:"flex",
    padding: 20,
    backgroundColor: "white",
    height: windowheight,
    width:windowWidth
},
});