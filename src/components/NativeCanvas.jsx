import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Canvas from 'react-native-canvas';

const NativeCanvas = () => {
  const canvasRef = useRef(null);
  const [imageUri, setImageUri] = useState('https://images.unsplash.com/photo-1634915728822-5ad85582837a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80');

  useEffect(() => {
    const drawImage = async () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = imageUri;

        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
        };
      }
    };

    drawImage();
  }, [imageUri]);

  const addRectangle = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 100, 100);
  };

  const addCircle = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(200, 100, 50, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const addArrow = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(300, 300);
    ctx.stroke();
  };

  const addText = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.font = '30px Arial';
    ctx.fillText('Hello, World!', 150, 150);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Editor</Text>
      <Canvas ref={canvasRef} style={styles.canvas} />
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
        <TouchableOpacity style={styles.button} onPress={addText}>
          <Text style={styles.buttonText}>Add Text</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NativeCanvas;

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
  canvas: {
    width: '80%',
    height: '50%',
    borderWidth: 1,
    borderColor: 'gray',
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
