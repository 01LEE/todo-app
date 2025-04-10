import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import React from 'react';

const TodoListScreen = ({ navigation, route }) => {
  const { todos } = route.params?.todosState || { todos: [] };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>목록</Text>
      <Text>{"할 일 : " + JSON.stringify(todos)}</Text>
    </View>
  );
}

export default TodoListScreen