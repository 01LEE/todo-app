import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import React from 'react';

const MyPageScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>내 정보</Text>
    </View>
  );
}

export default MyPageScreen;


