import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Svg, { Rect, Circle, Line } from 'react-native-svg';
import Marker from 'react-native-image-marker';

const NativeMaker = () => {
  const [shapes, setShapes] = useState([]);
  const [imageUri, setImageUri] = useState('https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=');

  const addRectangle = () => {
    setShapes([...shapes, { type: 'rect', x: 50, y: 50, width: 100, height: 100, fill: 'blue' }]);
  };

  const addCircle = () => {
    setShapes([...shapes, { type: 'circle', cx: 200, cy: 100, r: 50, fill: 'red' }]);
  };

  const addArrow = () => {
    setShapes([...shapes, { type: 'line', x1: 200, y1: 200, x2: 300, y2: 300, stroke: 'black', strokeWidth: 2 }]);
  };

  const saveImage = async () => {
    try {
      const markers = shapes.map((shape) => {
        if (shape.type === 'rect') {
          return {
            position: { x: shape.x, y: shape.y },
            text: '',
            scale: 1,
            rotate: 0,
            color: shape.fill,
            type: 'Rect',
            width: shape.width,
            height: shape.height
          };
        } else if (shape.type === 'circle') {
          return {
            position: { x: shape.cx - shape.r, y: shape.cy - shape.r },
            text: '',
            scale: 1,
            rotate: 0,
            color: shape.fill,
            type: 'Oval',
            width: shape.r * 2,
            height: shape.r * 2
          };
        } else if (shape.type === 'line') {
          return {
            position: { x: shape.x1, y: shape.y1 },
            text: '',
            scale: 1,
            rotate: 0,
            color: shape.stroke,
            type: 'Line',
            width: shape.x2 - shape.x1,
            height: shape.y2 - shape.y1
          };
        }
      });

      const result = await Marker.markText({
        src: imageUri,
        markers: markers,
        markerScale: 1,
        quality: 100,
        saveFormat: 'jpg',
        height:100,
        width:100
      });

      // Update the image URI to the newly saved image
      setImageUri(result);
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Editor</Text>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} onError={(e) => console.error('Image load error:', e.nativeEvent.error)} />
        <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
          {shapes.map((shape, index) => {
            if (shape.type === 'rect') {
              return <Rect key={index} x={shape.x} y={shape.y} width={shape.width} height={shape.height} fill={shape.fill} />;
            } else if (shape.type === 'circle') {
              return <Circle key={index} cx={shape.cx} cy={shape.cy} r={shape.r} fill={shape.fill} />;
            } else if (shape.type === 'line') {
              return <Line key={index} x1={shape.x1} y1={shape.y1} x2={shape.x2} y2={shape.y2} stroke={shape.stroke} strokeWidth={shape.strokeWidth} />;
            }
          })}
        </Svg>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={addRectangle}>
          <Text style={styles.buttonText}>Add Rectangle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addCircle}>
          <Text style={styles.buttonText}>Add Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addArrow}>
          <Text style={styles.buttonText}>Add Arrow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={saveImage}>
          <Text style={styles.buttonText}>Save Image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NativeMaker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    width: '80%',
    height: '50%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0A497B',
    borderWidth: 1,
    borderColor: 'lightblue',
    height: 50,
    width: 120,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
