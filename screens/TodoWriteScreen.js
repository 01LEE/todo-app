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
        style={{
          flex: 0.5,
          pading: 10,
          backgroundColor: '#fff',
          borderRadius: 10,
          margin: 10,
          borderWidth: 2
        }}
      />
      <Pressable onPress={() => {
        navigation.navigate('Detail', { todos });
        setTodos('');
      }}>
        <Text
          style={{
            width: "30%",
            pading: 10,
            backgroundColor: '#fff',
            borderRadius: 10, margin: 10,
            borderWidth: 2,
            textAlign: 'center',
            fontWeight: 'bold'
          }}
        >작성</Text>
      </Pressable>
    </>
  );
}

export default TodoWriteScreen