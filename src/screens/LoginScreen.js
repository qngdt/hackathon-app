import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.welcome}>YogApp</Text>
                    <View style={{ height: 30 }} />
                    <View style={styles.emailContainer}>
                        <TextInput style={styles.textInput} placeholder="Email"
                            keyboardType="email-address" />
                    </View>
                    <View style={styles.passwordContainer}>
                        <TextInput style={styles.textInput} placeholder="Password"
                            secureTextEntry={true} />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SetSelectScreen')} style={styles.button}>
                        <Text style={styles.buttonText}>SIGN IN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
        paddingTop: 50
    },
    normalContainer: {
        height: 20,
    },
    normalText: {
        color: '#5B5A5A',
        fontSize: 12,
        alignItems: 'center',
        textAlign: 'center',
        width: 330,
    },
    welcome: {
        fontSize: 25,
        color: '#5B5A5A',
        letterSpacing: 6
    },
    textInput: {
        padding: 0,
        margin: 0,
        color: '#989899',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 12,
    },
    button: {
        width: 325,
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
    },
    emailContainer: {
        width: 325,
        borderColor: '#CFD0D1',
        borderWidth: 1,
        height: 50,
        padding: 10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomWidth: 0,
        backgroundColor: '#F5F6F7'
    },
    passwordContainer: {
        width: 325,
        borderColor: '#CFD0D1',
        borderWidth: 1,
        height: 50,
        padding: 10,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: '#F5F6F7'

    }

});