import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function SettingsScreen(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <Text>SettingsScreen</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text>Go to HomeScreen</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});