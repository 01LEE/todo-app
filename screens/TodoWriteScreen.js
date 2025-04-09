import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

const TodoWriteScreen = ({ navigation, route }) => {
    const [todos, setTodos] = useState('');

    return (
        <>
            <TextInput
                onChangeText={setTodos}
                value={todos}
                placeholder="할 일을 작성해주세요."
                style={ style.inputBox}
            />
            <View style={{
                flexDirection: 'row',
                gap: 5,
                justifyContent: 'center',
                marginLeft: 10,
                marginRight: 10
            }}>
                <Pressable
                    style={style.PressableBtn}
                    onPress={() => {
                        navigation.navigate('TodoList', { todos });
                        setTodos('');
                    }}>
                    <Text style={style.text}>작성</Text>
                </Pressable>
                <Pressable
                    style={style.PressableBtn}
                    onPress={() => {
                        navigation.navigate('Home', { todos });
                    }}>
                    <Text >취소</Text>
                </Pressable>
            </View>

        </>
    );
}

const style = StyleSheet.create({
    inputBox: {
        minHeight: 200,
        pading: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    PressableBtn: {
        width: "50%",
        pading: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
export default TodoWriteScreen