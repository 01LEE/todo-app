import { StyleSheet, Text, View, Button, TextInput, Pressable, Alert } from 'react-native';
import React, { useState, useRef } from 'react';

import { dateToStr } from '../utils/util';






const useTodoState = () => {
    const [todos, setTodos] = useState([]);
    const lastTodoIdRef = useRef(0);

    const addTodo = (newContent) => {
        const id = ++lastTodoIdRef.current;
        const newTodo = {
            id,
            content: newContent,
            regDate: dateToStr(new Date())
        }
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
    }

    return { addTodo };
}


const TodoWriteScreen = ({ navigation }) => {
    const [todo, setTodo] = useState("");

    const { addTodo } = useTodoState();

    const headleAddTodo = () => {
        if(!todo.trim()) {
            Alert.alert("할 일을 작성해주세요");
            return;
        }
        addTodo(todo);
        navigation.navigate('TodoList', { todo });
        setTodo("");
    }

    return (
        <>
            <TextInput
                onChangeText={setTodo}
                value={todo}
                placeholder="할 일을 작성해주세요."
                style={style.inputBox}
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
                    onPress={headleAddTodo}
                >
                    <Text style={style.text}>작성</Text>
                </Pressable>
                <Pressable
                    style={style.PressableBtn}
                    onPress={() => {
                        navigation.navigate('Home');
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
        padding: 10,
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