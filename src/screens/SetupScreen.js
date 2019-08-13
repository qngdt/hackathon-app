import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
const socketIO = require('socket.io-client')

class SetupScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scan: true
    }
   
  }

  _socketInit = () => {
    this.socket = socketIO('http://192.168.10.109:5000', {
      secure: false,
      transports: ['websocket']
    })
    this.socket.connect(); 
    console.log('Connected to Socket')
    this.socket.on('connect', () => { 
      console.log('connected to socket server'); 
    }); 
    this.socket.on('msg', (data) => {
      console.log('Data recieved from server', data);
    });
    this.socket.emit('data', 'dummy data')
  }

  componentDidMount() {
    this._socketInit();
    setInterval(() => {
      console.log('Got here')
      this._takePicture()
    }, 2000)
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        {/* <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this._takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    );
  }

  _takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.socket.emit('data', 'ayy lmao')

    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});


export default SetupScreen;