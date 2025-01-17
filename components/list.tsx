import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface ListItemProps {
    el: { text: string; key: string };
    deleteHandler: (key: string) => void;
}

export default function ListItem({ el, deleteHandler }: ListItemProps) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: "center",
        borderRadius: 5,
        backgroundColor: "#fff0f5",
        borderWidth: 1,
        marginTop: 20,
        width: "60%",
        marginLeft: "20%",
    },
});