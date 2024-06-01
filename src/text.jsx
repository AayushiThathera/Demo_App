packages name 


1.import ImagePicker from 'react-native-image-crop-picker';(found rotate and crop and resize functionality in this package)
add the permission in the androidmanifest.xml file the external storage permission and write the function to open the imagepicker and crop the image and also rotate and also resize the image 

2.import RNPhotoManipulator, { FlipMode } from 'react-native-photo-manipulator';
import App from '../App';
got this pacakge in which everything is manual and we have to crop ,rotate,place text on the image and we have to install only thias pacakge there is no need to add anything in the other file just install the pacakge thats it
here is the link below of the link
https://www.npmjs.com/package/react-native-photo-manipulator

3.  new package

use readme file of that package and the android pacakge start from the line number 98 the android package 

react-native-photo-editor install this package and then add this line in android/build.gradle file in that file add the line in the above code of line   repositories {} and the line is 
maven { url 'https://www.jitpack.io' }

then add these two lines in the AndroidManifest.xml file
<activity android:name="com.ahmedadeltito.photoeditor.PhotoEditorActivity" />
<activity android:name="com.yalantis.ucrop.UCropActivity" />

and also added the permission of the external storage in the androidmanifest.xml file

<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

and also make the   android:allowBackup="true" so it not through any error


4. react-native-svg
use this pacakge in the above code and not find the correct package its not suitable for the App

5 . '@baronha/react-native-photo-editor'
in this pacakge it contain all the s like reactangle ,line ,circle and text

6. react-native-sketch-canvas 
use this pacakge but it use to draw the solid  like reactangle,square

7. react-native-canvas
use this package in the app but not this correct in the app because in this you have to draw reactangle,circle ,sqaure in the app like canvas

