import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { useState } from 'react';


// react native navigation을 사용하는 데 필요한 import 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  const navigation = useNavigation(); // 복잡할 경우 사용할 수 있는 hook 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>메인 화면</Text>
      <Button
        title='Go to Detail'
        onPress={() => navigation.navigate('Detail')} />

      <Button
        title='Go to TodoWrite'
        onPress={() => navigation.navigate('TodoWrite')}
      />
    </View>
  );
}

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

function DetailScreen({ navigation, route }) { // 복잡하지 않기에 그냥 매개변수 자체로 navigation을 사용한다
  const todos = route?.params?.todos ? route.params.todos : '작성된 내용이 없습니다.';

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>상세보기 화면</Text>
      <Text>작성 내용 : {todos}</Text>

      <Button title='Go to Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go to Detail' onPress={() => navigation.push('Detail')} />




    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="TodoWrite" component={TodoWriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
