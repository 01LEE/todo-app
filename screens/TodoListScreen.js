import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import React from 'react';

const TodoListScreen = ({ navigation, route }) => {
  const { todos } = route.params?.todosState || { todos: [] };
  console.log("todos.length", todos.length);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <View key={todo.id} style={styles.listBox}>
            <Text> 번호 : {todo.id}</Text>
            <Text> 날짜 : {todo.regDate}</Text>
            <Text> 내용 : {todo.content}</Text>
          </View>
        ))
      ) : (
        <Text>할 일이 없습니다.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listBox: {
    borderWidth: 2,
    width: '90%',
    padding: 10,
    borderRadius: 10
  },
});

export default TodoListScreen