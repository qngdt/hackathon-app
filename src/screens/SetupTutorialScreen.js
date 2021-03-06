import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
const Sound = require('react-native-sound');
import Video from 'react-native-video';
Sound.setCategory('Playback');


class SetupTutorialScreen extends React.Component {

  static navigationOptions = {
    title: 'Hướng dẫn setup camera',
  };

  constructor(props) {
    super(props)
    this.audio = {
      start_1: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
      start_2: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
      start_3: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
      incorrect: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      }),
      finish: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
      })
    }
    this.current_audio = this.audio.start_1
  }


  componentDidMount() {
    // const whoosh = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
    //   if (error) {
    //     console.log('failed to load the sound', error);
    //     return;
    //   }
    //   whoosh.play((success) => {
    //     if (success) {
    //       console.log('successfully finished playing');
    //     } else {
    //       console.log('playback failed due to audio decoding errors');
    //     }
    //   }); 
    // });
    // console.log('after');
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Video Hướng Dẫn</Text>
        </View>
        <Video
          repeat
          muted
          source={require('../../assets/video/setup01.mp4')}   // Can be a URL or a local file.
          ref={(ref) => {
            this.player = ref
          }}
          style={styles.backgroundVideo}
        />
        <View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('PracticeScreen')}
            style={styles.button}>
            <Text style={styles.buttonText}>Bắt đầu tập</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#129793",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
    color: 'white'
  },
  backgroundVideo: {
    aspectRatio: 1,
    width: "100%",
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
    top: 350,
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
    fontSize: 16
  }
});

export default SetupTutorialScreen;

