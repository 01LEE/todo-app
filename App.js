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

  const tabConfig = [
    {
      name: "Home",
      title: "메인 화면",
      component: HomeScreen,
      focusedIcon: "home-variant",
      unfocusedIcon: "home-variant-outline",
      iconComponent: MaterialCommunityIcons
    },
    {
      name: "TodoSearch",
      title: "검색",
      component: TodoSearchScreen,
      focusedIcon: "text-search",
      unfocusedIcon: "text-search",
      iconComponent: MaterialCommunityIcons

    },
    {
      name: "TodoWrite",
      title: "작성",
      component: TodoWriteScreen,
      focusedIcon: "note-edit",
      unfocusedIcon: "note-edit-outline",
      iconComponent: MaterialCommunityIcons
    },
    {
      name: "TodoList",
      title: "목록",
      component: TodoListScreen,
      focusedIcon: "view-list",
      unfocusedIcon: "view-list-outline",
      iconComponent: MaterialCommunityIcons
    },
    {
      name: "MyPage",
      title: "내 정보",
      component: MyPageScreen,
      focusedIcon: "account-circle",
      unfocusedIcon: "account-circle-outline",
      iconComponent: MaterialCommunityIcons
    },
  ]

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const routeConfig = tabConfig.find((config) => config.name === route.name);

      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;



      return <IconComponent name={iconName} size={size} color={color} />

    },

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
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        {tabConfig.map((routeConfig) => (
          <Tab.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
            options={{ title: routeConfig.title }}
          />
        ))}
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
