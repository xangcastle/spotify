import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";


export default function PlayListScreen(props) {
    const {navigation, route} = props;
    const {item} = route.params || {item: {id: 0, title: "No title"}};
    return (
        <View style={styles.container}>
            <Text>PlayListScreen</Text>
            <Text>{item.title}</Text>
            <Button
                title="Go to HomeScreen"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});