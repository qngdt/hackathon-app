import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
const Sound = require('react-native-sound');
const socketIO = require('socket.io-client');

class PracticeScreen2 extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.audio_playing = false
        this.has_error = false
        this.finish = false
        this.autoPicture = false
        this.socket = socketIO('http://192.168.10.109:5047', {
            secure: false,
            transports: ['websocket']
        })
        this.socket.connect();
        this.socket.on('connect', () => {
            console.log('Connected to socket server');
        });
        this.socket.on('msg', (msg) => {
            console.log('Message recieved from server', msg);
            if (msg != null) {
                msg = JSON.parse(msg)
                console.log(msg.finish, typeof (msg.finish))
                if (msg.finish) {
                    clearInterval(this.autoPicture)
                    this.props.navigation.navigate('FinishScreen')
                }
            }
        })
        this.current_audio = null
    }

    // _socketInit = () => {
    //     this.socket = socketIO('http://192.168.10.109:5047', {
    //         secure: false,
    //         transports: ['websocket']
    //     })
    //     this.socket.connect();
    //     this.socket.on('connect', () => {
    //         console.log('Connected to socket server');
    //     });
    //     this.socket.on('msg', (msg) => {
    //         console.log('Message recieved from server', msg);
    //         msg = JSON.parse(msg)
    //         console.log(msg)
    //         this.finish = msg.finish
    //         this.has_error = msg.has_error
    //         console.log(this.finish, this.has_error, this.audio_playing)
    //         if (this.finish) {
    //             // console.log(this.current_audio)
    //             clearInterval(this.autoPicture)
    //             // this.current_audio.setVolume(0.0)
    //             this.current_audio = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
    //                 if (error) {
    //                     console.log('failed to load the sound', error);
    //                     return;
    //                 }
    //                 this.current_audio.play((success) => {
    //                     if (success) {
    //                         console.log('successfully finished playing');
    //                     } else {
    //                         console.log('playback failed due to audio decoding errors');
    //                     }
    //                 });
    //             });
    //         } else {
    //             console.log('GOt here ?')
    //             if (this.has_error) {
    //                 // if (!this.audio_playing) {
    //                 // this.audio_playing = true
    //                 console.log(this.has_error, this.finish, this.audio_playing)
    //                 this.current_audio = new Sound('bao_loi_nam.mp3', Sound.MAIN_BUNDLE, (error) => {
    //                     if (error) {
    //                         console.log('failed to load the sound', error);
    //                         return;
    //                     }
    //                     this.current_audio.play((success) => {
    //                         if (success) {
    //                             console.log('successfully finished playing');
    //                         } else {
    //                             console.log('playback failed due to audio decoding errors');
    //                         }
    //                     });
    //                 });
    //             }
    //         }
    //     })
    // }

    componentDidMount() {
        this.current_audio = new Sound('start_mot_bon.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            this.current_audio.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                    this.current_audio = new Sound('start_hai_bon.mp3', Sound.MAIN_BUNDLE, (error) => {
                        if (error) {
                            console.log('failed to load the sound', error);
                            return;
                        }
                        setTimeout(() => {
                            this.current_audio.play((success) => {
                                if (success) {
                                    console.log('successfully finished playing');
                                    this.current_audio = new Sound('start_ba_bon.mp3', Sound.MAIN_BUNDLE, (error) => {
                                        if (error) {
                                            console.log('failed to load the sound', error);
                                            return;
                                        }
                                        setTimeout(() => {
                                            this.current_audio.play((success) => {
                                                if (success) {
                                                    console.log('successfully finished playing');
                                                    this.autoPicture = setInterval(() => {
                                                        console.log('Got here')
                                                        this._takePicture()
                                                    }, 2500)
                                                } else {
                                                    console.log('playback failed due to audio decoding errors');
                                                }
                                            });
                                        }, 2000)
                                    });
                                } else {
                                    console.log('playback failed due to audio decoding errors');
                                }
                            });
                        }, 2000)

                    });
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
            });
        });



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
            </View>
        );
    }

    _takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, doNotSave: true, orientation: "landscapeLeft", width: 432 };
            const data = await this.camera.takePictureAsync(options);
            this.socket.emit('data', data.base64)
            // this.socket.emit('data', 'dummy data')
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
        alignItems: 'center'
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


export default PracticeScreen2;