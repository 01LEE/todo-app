import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

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
        onPress={() => navigation.navigate('Detail')}>
      </Button>
    </View>
  );
}

function DetailScreen({ navigation }) { // 복잡하지 않기에 그냥 매개변수 자체로 navigation을 사용한다
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>상세보기 화면</Text>
      
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
