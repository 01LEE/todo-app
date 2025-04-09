import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import React from 'react';

const TodoSearchScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>검색</Text>
    </View>
  );
}

export default TodoSearchScreen