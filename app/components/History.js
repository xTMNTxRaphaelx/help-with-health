
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text ,AsyncStorage} from 'react-native';

function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style= {styles.title}> You washed your hand on {title}</Text>
        </View>
    );
}

export default class History extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            List: []
        };
    }

    async componentDidMount() {
        console.log("componentDidMount")
        this.retriveData();
    }

    retriveData = async () => {
        console.log("retriveData 1")
        try {
            let key = '@###1'
            let value = JSON.parse(await AsyncStorage.getItem(key));
            console.log(value)
            if (value === null) {
                console.log("Null ")

            }
            else {
                console.log("2 ")
                this.setState({ List: value })
                console.log("test8888")
                console.log(this.state.List)
            }
        } catch (error) {


        }
    }

    render() {

        return (

            <FlatList
                data={this.state.List}
                renderItem={({ item }) => <Item title={item.data} />}
                keyExtractor={item => item.id}

            />

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10
    },
    item: {
        backgroundColor: '#008000',
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:8
    },
    title: {
        fontSize: 20,
        color: '#FFF'
    },
});









