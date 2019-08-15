import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

class SetSelectScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            setList: [
                {
                    name: 'Bài tập cho người mới bắt đầu',
                    subtitle: 'Bài tập cho người mới bắt đầu',
                    progress: '90%',
                    avatar_url: 'https://cdn4.iconfinder.com/data/icons/yoga-meditation-exercise-1/128/13-512.png'
                },
                {
                    name: 'Bài tập giảm béo',
                    subtitle: 'Bài tập giảm béo',
                    progress: '90%',
                    avatar_url: 'https://previews.123rf.com/images/kahovsky/kahovsky1812/kahovsky181200080/113610427-cute-smiling-happy-strong-avocado-meditate-in-yoga-pose-vector-flat-cartoon-character-illustration-i.jpg'
                },
                {
                    name: 'Bài tập tăng tuổi thọ',
                    subtitle: 'Bài tập tăng tuổi thọ',
                    progress: '90%',
                    avatar_url: 'https://previews.123rf.com/images/djvstock/djvstock1712/djvstock171210886/92416256-cute-brain-practicing-yoga-icon-over-white-background-illustration-.jpg'
                },
                {
                    name: 'Bài tập giảm stress',
                    subtitle: 'Bài tập giảm stress',
                    progress: '90%',
                    avatar_url: 'https://images-na.ssl-images-amazon.com/images/I/411cb-LkHTL.jpg'
                },
                {
                    name: 'Bài tập giúp trắng da',
                    subtitle: 'Bài tập giúp trắng da',
                    progress: '90%',
                    avatar_url: 'https://media.istockphoto.com/vectors/cartoon-boy-in-yoga-pose-with-cute-cat-kids-practicing-yoga-icon-vector-id1161389291'
                },
                {
                    name: 'Bài tập cải thiện trí thông minh',
                    subtitle: 'Bài tập cải thiện trí thông minh',
                    progress: '90%',
                    avatar_url: 'https://cdn4.iconfinder.com/data/icons/yoga-meditation-exercise-1/128/13-512.png'
                },
                {
                    name: 'Bài tập giúp giảm đau lưng',
                    subtitle: 'Bài tập giúp giảm đau lưng',
                    progress: '90%',
                    avatar_url: 'https://cdn4.iconfinder.com/data/icons/yoga-meditation-exercise-1/128/13-512.png'
                },
                {
                    name: 'Bài tập cải thiện đường hô hấp',
                    subtitle: 'Bài tập cải thiện đường hô hấp',
                    progress: '90%',
                    avatar_url: 'https://cdn4.iconfinder.com/data/icons/yoga-meditation-exercise-1/128/13-512.png'
                }
            ]
        }
    }

    static navigationOptions = {
        title: 'Danh sách bài tập',
      };

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            Component={TouchableOpacity}
            title={item.name}
            leftAvatar={{ source: { uri: item.avatar_url } }}
            subtitle={item.subtitle}
            onPress={() => this.props.navigation.navigate('SetDetailsScreen')}
            badge={{ value: item.progress, containerStyle: { marginTop: -20 } }} />
    )

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    backgroundColor: "#CED0CE",
                }}
            />
        );
    };


    render() {
        return (
            <View>
                <View style={styles.container}>
                    <FlatList
                        style={{ padding: 20 }}
                        keyExtractor={this.keyExtractor}
                        data={this.state.setList}
                        ItemSeparatorComponent={this.renderSeparator}
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
    }
});

export default SetSelectScreen;