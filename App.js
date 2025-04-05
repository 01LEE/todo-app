import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { useState } from 'react';


// react native navigation을 사용하는 데 필요한 import 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 보통의 경우 navigation은 bottom에 쓴다
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



// icons
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; // materialCommunity Icons 


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


const TodoSearchScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>검색</Text>
    </View>
  );
}

const TodoListScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>목록</Text>
    </View>
  );
}

const MyPageScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>내 정보</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarLabelStyle: {
          fontSize: 14,
          paddingBottom: 10,
          fontWeight: 'bold'
        },
        tabBarStyle: {
          height: 60
        },
        tabBarInactiveTintColor: '#0163d2',
        tabBarActiveTintColor: 'black',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name == "Home") {
            iconName = "home-variant";
          } else if (route.name == "TodoSearch") {
            iconName = "text-search"
          } else if (route.name == "TodoWrite") {
            iconName = "note-edit";
          } else if (route.name == "TodoList") {
            iconName = "view-list";
          } else if (route.name == "MyPage") {
            iconName = "account-circle"
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          )

        }
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen}
          options={
            {
              title: '홈',
            }} />
        <Tab.Screen name="TodoSearch" component={TodoSearchScreen}
          options={
            {
              title: '검색',
            }
          } />
        <Tab.Screen name="TodoWrite" component={TodoWriteScreen}
          options={
            {
              title: '작성',
            }
          } />
        <Tab.Screen name="TodoList" component={TodoListScreen}
          options={
            {
              title: '목록',
            }
          } />
        <Tab.Screen name="MyPage" component={MyPageScreen}
          options={
            {
              title: '내 정보',
            }
          } />
      </Tab.Navigator>
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
