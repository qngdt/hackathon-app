import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
const Sound = require('react-native-sound');
const socketIO = require('socket.io-client');

class PracticeScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            audio_playing: false,
            has_error: false,
            audio_state: null,
            finish: false
        }
        // this.audio = {
        //     start_1: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        //         if (error) {
        //             console.log('failed to load the sound', error);
        //             return;
        //         }
        //     }),
        //     start_2: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        //         if (error) {
        //             console.log('failed to load the sound', error);
        //             return;
        //         }
        //     }),
        //     start_3: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        //         if (error) {
        //             console.log('failed to load the sound', error);
        //             return;
        //         }
        //     }),
        //     incorrect: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        //         if (error) {
        //             console.log('failed to load the sound', error);
        //             return;
        //         }
        //     }),
        //     finish: new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
        //         if (error) {
        //             console.log('failed to load the sound', error);
        //             return;
        //         }
        //     })
        // }
        this.current_audio = null
    }

    _socketInit = () => {
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
            this.setState({
                finish: msg.finish,
                has_error: msg.has_error
            }, () => {
                if (this.state.finish) {
                    this.current_audio.stop(() => {
                        this.current_audio = new Sound('correct.mp3', Sound.MAIN_BUNDLE, (error) => {
                            if (error) {
                                console.log('failed to load the sound', error);
                                return;
                            }
                            this.current_audio.play((success) => {
                                if (success) {
                                    console.log('successfully finished playing');
                                    this.props.navigation.navigate('FinishScreen')
                                } else {
                                    console.log('playback failed due to audio decoding errors');
                                }
                            });
                        });
                    })
                } else {
                    if (this.state.has_error) {
                        if (!this.state.audio_playing) {
                            this.setState({
                                audio_playing: true,
                            }, () => {
                                this.current_audio = new Sound('bao_loi_nam.mp3', Sound.MAIN_BUNDLE, (error) => {
                                    if (error) {
                                        console.log('failed to load the sound', error);
                                        return;
                                    }
                                    this.current_audio.play()
                                });
                            })
                        }
                    }
                }
            })
        });
        // this.socket.emit('data','dummy data');
    }


    componentDidMount() {
        this._socketInit();
        this.current_audio = new Sound('start_mot_nam.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error);
                return;
            }
            this.current_audio.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                    this.current_audio = new Sound('start_hai_nam.mp3', Sound.MAIN_BUNDLE, (error) => {
                        if (error) {
                            console.log('failed to load the sound', error);
                            return;
                        }
                        setTimeout(() => {
                            this.current_audio.play((success) => {
                                if (success) {
                                    console.log('successfully finished playing');
                                    this.current_audio = new Sound('start_ba_nam.mp3', Sound.MAIN_BUNDLE, (error) => {
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
                                                    }, 2000)
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
        if (!this.state.finish) {
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
        } else {
            this.props.navigation.navigate('FinishScreen')
        }
    }

    _takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true, doNotSave: true, orientation: "landscapeLeft", width: 432 };
            const data = await this.camera.takePictureAsync(options);
            // this.socket.emit('data', data.base64)
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


export default PracticeScreen;