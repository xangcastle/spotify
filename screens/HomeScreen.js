import React from "react";
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from "react-native";


export default function HomeScreen(props) {
    const {navigation} = props;
    const data = [
        {
            id: 1,
            title: "Song 1",
        },
        {
            id: 2,
            title: "Song 2",
        },
        {
            id: 3,
            title: "Song 3",
        }
    ];
    const renderItem = ({item, index}) => {
        return <TouchableOpacity
            onPress={() => navigation.navigate('PlayList', {item})}>
            <Text>{index}</Text>
            <Text>{item.title}</Text>
        </TouchableOpacity>
    };
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate("PlayList")}
            />
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});