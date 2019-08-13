import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

class SetSelectScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            setList: [
                {
                    name: 'Set 1',
                    subtitle: 'Set 1',
                    progress: '90%'
                },
                {
                    name: 'Set 2',
                    subtitle: 'Set 2',
                    progress: '60%'
                },
                {
                    name: 'Set 3',
                    subtitle: 'Set 3',
                    progress: '70%'
                }
            ]
        }
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            containerStyle={{ borderBottomWidth: 2 }}
            Component={TouchableOpacity}
            title={item.name}
            subtitle={item.subtitle}
            onPress={() => this.props.navigation.navigate('SetDetailsScreen')}
            badge={{ value: item.progress, containerStyle: { marginTop: -20 } }} />
    )

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text>Bài tập đề nghị</Text>
                    <FlatList
                        style={{ padding: 20 }}
                        keyExtractor={this.keyExtractor}
                        data={this.state.setList}
                        renderItem={this.renderItem} />
                </View>
                <View style={styles.container}>
                    <Text>Bài tập lựa chọn</Text>
                    <FlatList
                        style={{ padding: 20 }}
                        keyExtractor={this.keyExtractor}
                        data={this.state.setList}
                        renderItem={this.renderItem} />
                </View>
            </View>
        );
    }


}

styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 3,
        margin: 5,
        padding: 10
    }
});

export default SetSelectScreen;