import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>СПИСОК ДЕЛ</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
    },
    text: {
        padding: 20,
        textAlign: "center",
    },
});