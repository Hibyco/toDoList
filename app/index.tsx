import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Header from "../components/header";
import ListItem from "../components/list";
import Form from "../components/form";

interface Item {
    text: string;
    key: string;
}

export default function App() {
    const [listOfItems, setListOfItems] = useState<Item[]>([
        { text: "Купить...", key: "1" },
        { text: "Помыть...", key: "2" },
        { text: "Сделать...", key: "3" },
    ]);

    const addHandler = (text: string) => {
        setListOfItems((list) => {
            return [
                { text: text, key: Math.random().toString(36).substring(7) },
                ...list,
            ];
        });
    };

    const deleteHandler = (key: string) => {
        setListOfItems((list) => {
            return list.filter((item) => item.key !== key);
        });
    };

    return (
        <View style={styles.header}>
            <Header />
            <Form addHandler={addHandler} />
            <View>
                <FlatList
                    data={listOfItems}
                    renderItem={({ item }) => (
                        <ListItem el={item} deleteHandler={deleteHandler} />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
    },
});