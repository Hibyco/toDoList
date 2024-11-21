import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

interface FormProps {
    addHandler: (text: string) => void;
}

export default function Form({ addHandler }: FormProps) {
    const [text, setValue] = useState<string>("");

    const onChange = (text: string) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={onChange}
                placeholder="Впишите задачу..."
            />
            <Button
                color="#AA96DA"
                onPress={() => addHandler(text)}
                title="Добавить задачу"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        padding: 20,
    },
});