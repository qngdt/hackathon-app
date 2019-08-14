import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import Video from 'react-native-video';

class SetDetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Chi tiết động tác',
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>Video Hướng Dẫn</Text>
        </View>
        <Video
          repeat
          muted
          source={require('../../assets/video/test.mp4')}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}
          style={styles.backgroundVideo}
        />
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('SetupTutorialScreen')}
            style={styles.button}>
            <Text style={styles.buttonText}>Tập cùng trợ lý ảo</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingBottom: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1
  },
  backgroundVideo: {
    position: 'absolute',
    height: 600,
    top: 80,
    left: 0,
    bottom: 0,
    right: 0,
  },
  button: {
    width: 250,
    position: 'absolute',
    top: 300,
    left: 60,
    bottom: 0,
    borderColor: '#129793',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 24,
    marginTop: 20,
    backgroundColor: '#129793',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#129793',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  }
});

export default SetDetailsScreen;